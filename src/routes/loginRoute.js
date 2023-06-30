const express = require("express");
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const userController = require('../controllers/userController');
  
router.post('/', async function(req,res) {
  try {
    const {username, password } = req.body;
    const result = await userController.userLogin(username, password);
    if (result['succeeded']) {
      const token = jwt.sign({ username: user['username'] }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: result['error'] });
    }
    
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
