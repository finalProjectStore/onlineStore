const express = require('express');
const bcrypt = require('bcrypt'); // To generate and validate hashes, bcrypt library that comes with Node.
const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  age: { type: Number, required: [true, "can't be blank"] },
  hash_password: String,

  created: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
};


const User = mongoose.model('User', UserSchema); // create User DB with UserSchema collection

module.exports = User;
