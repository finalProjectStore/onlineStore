var mongoose = require('mongoose');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

const checkPasswordsMatch = function (password, password2) {
  if (password === password2) {
    return true;
  }
  return false;
};

const createUser = async function (username, email, age, password1, password2) {
  if (!checkPasswordsMatch(password1, password2)) {
    return 'wrong password';
  }

  const doesExist = await User.findOne({ email: email });
  if (doesExist) {
    return 'choose different email';
  }

  const usernameExist = await User.findOne({ username: username });
  if (usernameExist) {
    return 'username already exist.';
  }

  const newUser = new User({
    username: username,
    email: email,
    age: age,
    password: password1,
  });

  const savedUser = await newUser.save(); //take time to load the user into the db

  return '';
};

const userLogin = async function (usernameToFind, passwordToFind) {
  const user = await User.findOne({ username: usernameToFind });
  if (!user) {
    return { succeeded: false, error: 'username or password is not valid.' };
  }

  const passwordMatch = await user.comparePassword(passwordToFind);
  if (passwordMatch) {
    return { succeeded: true, user };
  }

  return { succeeded: false, error: 'username or password is not valid.' };
  /// ADD CHECK PASSWORD IN THE SERVER ///
};

const updateUserDetails = async function (usernameToFind, valueToChange, type) {
  var result;
  const user = await User.findOne({ username: usernameToFind });

  if (!user) {
    return 'could not find the user';
  }
  switch (type) {
    case 'username':
      const isUsernameExist = await User.findOne({ username: valueToChange });
      if (isUsernameExist) {
        return 'this username already exist,';
      }
      result = await user.changeUsername(valueToChange);
      break;

    case 'email':
      const isEmailExist = await User.findOne({ email: valueToChange });
      if (isEmailExist) {
        return 'this email already exist,';
      }
      result = await user.changeEmail(valueToChange);
      break;

    case 'password':
      result = await user.changePassword(valueToChange);
      break;

    default:
      break;
  }

  return result; /// update success.
};

const getUser = async function (username) {
  try {
    const user = await User.findOne({username});
    return user;
  } catch (error) {
    console.error('getUser Error: ',error);
    throw new Error('Error getting user');
  }
}


const getAllUsers = async function () {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error);
    throw new Error('Failed to retrieve users.');
  }
};
const getAllUsersCount = async function () {
  try {
    const users = await User.find({});
    const userCount = users.length;
    return userCount;
  } catch (error) {
    console.error('Error retrieving users:', error);
    throw new Error('Failed to retrieve users.');
  }
};


const getTotalAmount = async function () {
  try {
    const orders = await Order.find(); 

    let totalAmount = 0;

    orders.forEach((order) => {
      order.carts.forEach((cart) => {
        totalAmount += cart.price;
      });
    });

    return totalAmount;
  } catch (error) {
    console.error('Error calculating total amount:', error);
    throw error;
  }
};








module.exports = { createUser,getUser, userLogin, updateUserDetails, getAllUsers,getAllUsersCount, getTotalAmount };
