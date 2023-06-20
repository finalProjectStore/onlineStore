const { response } = require('express');
var mongoose = require('mongoose');
const User = require('../models/userModel');

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


  const doesExist = await User.findOne({ email: email});
  if(doesExist) {return 'choose different email';}

  const usernameExist = await User.findOne({ username: username});
  if(usernameExist) {return 'username already exist.'}
  
  const newUser = new User({
    username:username,
    email:email,
    age:age,
    password:password1
});

  const savedUser = await newUser.save(); //take time to load the user into the db
  
    return "";
};


const userLogin = async function (usernameToFind, passwordToFind) {
  const user = await User.findOne({username : usernameToFind});
  if(!user){
    return "username or password is not valid."
  }
  const passwordMatch = await user.comparePassword(passwordToFind);
  if(passwordMatch){
    return "";
  }
  return 'username or password is not valid.'
  /// ADD CHECK PASSWORD IN THE SERVER ///
}

module.exports = { createUser, userLogin };
