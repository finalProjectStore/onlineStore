const express = require("express");
const router = express.Router();
const path = require('path');

//Controller
const userController = require("../controllers/userController");


const bodyParser = require('body-parser');
router.use(bodyParser.json());




router.post('/register',async function(req, res)
{
  try {
    const {username, email, age, password1, password2 } = req.body;
    const result = await userController.createUser(username,email,age,password1,password2);
    res.send({response: result});
  } catch (error) {
    console.log(error);
  }
 
});





router.get('/register',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/register.html')) // Solve route error. check what is path.join().
});

module.exports = router;
