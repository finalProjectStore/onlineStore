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
      const token = jwt.sign({ 
        username: result['user']['username'],
        isAdmin: result['user']['isAdmin'],
      }, process.env.JWT_SECRET, { expiresIn: '180 days' });
      res.status(200).cookie('jwtToken', token).json({ username: result['user']['username'], jwtToken: token });
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
