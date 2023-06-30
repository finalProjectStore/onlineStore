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
    // TODO:
    console.log('result', JSON.stringify(result));
    if (result['succeeded']) {
      const token = jwt.sign({ username: result['user']['username'] }, process.env.JWT_SECRET);
      console.log('token', token);
      res.status(200).cookie('jwtToken', token).json({});
    } else {
      res.status(401).json({ error: result['error'] });
    }
    
  } catch (error) {
    console.log(error);
  }
});

router.get('/',function(req, res)
{
  res.sendFile(path.join(__dirname,'../views/public/login.html')) // Solve route error. check what is path.join().
});
   



module.exports = router;
