const express = require("express");
const router = express.Router();
const path = require('path');
const User = require('../models/user');



  
router.post('/', function(req,res) {
  console.log(req.body.username);
  
  
  // var username = req.body.username.trim();
  // var email = req.body.email.trim();
  // var age = req.body.age.trim();
  // var password = req.body.password;
  // var password2 = req.body.password2;

  // const newUser = new User ({
  //   username: req.body.username.trim(),
  //   email: req.body.email.trim(),
  //   age: req.body.age.trim(),
  //   hash_password: req.body.password,
  // });
  // newUser.save();

  res.sendFile(path.join(__dirname,'../views/public/login.html')) // Solve route error. check what is path.join().

});

router.get('/',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/login.html')) // Solve route error. check what is path.join().
});
   



module.exports = router;
