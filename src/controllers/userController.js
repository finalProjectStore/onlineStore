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
    return {status:401, message:'wrong password'};
  }

  const doesExist = await User.findOne({ email: email });
  if (doesExist) {
    return {status: 409, message:'choose different email'};
  }

  const usernameExist = await User.findOne({ username: username });
  if (usernameExist) {
    return {status: 409,message:'username already exist'};
  }

  const newUser = new User({
    username: username,
    email: email,
    age: age,
    password: password1,
  });

  const savedUser = await newUser.save(); //take time to load the user into the db

  return {status:200,user:savedUser, message:'User created successfuly'}
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

  try {
      const user = await User.findOne({ username: usernameToFind });
    if (!user) {
      return { 
        status: 404,
        message: 'User not found'
      }
    }
    var updatedUser;
    switch (type) {
      case 'username':
        const isUsernameExist = await User.findOne({ username: valueToChange });
        if (isUsernameExist) {
          return { status: 409, message:'Username already exists'}
        }
        updatedUser = await user.changeUsername(valueToChange);
        break;

      case 'email':
        const isEmailExist = await User.findOne({ email: valueToChange });
        if (isEmailExist) {
          return { status: 409, message: 'Email already exist'}
        }
        updatedUser = await user.changeEmail(valueToChange);
        break;

      case 'password':
        updatedUser = await user.changePassword(valueToChange);
        break;

      default:
        break;
    }

    return { status: 200, message: 'Update successful', user:updatedUser }
  } catch (error) {
    console.error(error);
    return { status: 500, message: 'Internal server error'}
    
  }
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


const deleteUser = async function(username)
{
    const result =  await User.deleteOne({ username : username });
    return result
}





module.exports = { createUser,getUser, userLogin, updateUserDetails, getAllUsers,getAllUsersCount, deleteUser,getTotalAmount };
