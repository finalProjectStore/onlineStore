const express = require("express");
const router = express.Router();
const path = require('path');

//Controller
const userController = require("../controllers/userController");


const bodyParser = require('body-parser');
router.use(bodyParser.json());




router.post('/register', function(req, res)
{

  let username = req.body.username;
  let email = req.body.email;
  let age = req.body.age;
  let password1 = req.body.password1;
  let password2 = req.body.password2;

 

   let result = userController.createUser(username,email,age,password1,password2);
   
   res.send({response: result});
});





router.get('/register',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/register.html')) // Solve route error. check what is path.join().
});

module.exports = router;
