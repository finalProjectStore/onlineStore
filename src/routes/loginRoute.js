const express = require("express");
const router = express.Router();
const path = require('path');
const User = require('../models/userModel');

const userController = require('../controllers/userController');



  
router.post('/', async function(req,res) {

  try {
    const {username, password } = req.body;
    const result = await userController.userLogin(username,password);
    res.send({response: result, name:username});
  } catch (error) {
    console.log(error);
  }
  
  
  

  res.sendFile(path.join(__dirname,'../views/public/login.html')) // Solve route error. check what is path.join().

});

router.get('/',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/login.html')) // Solve route error. check what is path.join().
});
   



module.exports = router;
