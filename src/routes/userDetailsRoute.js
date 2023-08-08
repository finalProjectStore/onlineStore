const express = require("express");
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/userdetails',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/userDetails.html')) // Solve route error. check what is path.join().
});

router.post('/userdetails/isadmin',async function (req,res) {
  try {
    const user = await userController.getUser(req.body.username);
    var response = '';
    response = user.isAdmin ? 'ok' : 'not admin';
    res.status(200).send({response});
  } catch(err) {
    res.status(404).send({error:err});
  }
 
})

router.post('/userdetails', async function(req,res) {

  try {
    const username = req.body.username;
    const type = req.body.type;
    const newValue = req.body.newValue;
    const result = await userController.updateUserDetails(username,newValue,type);
    if(typeof result === 'string') {res.send({response:result});}
    else{
      res.send({response:[
        {
          newUsername:result.username,
          email:result.email
        }]
      });  
    }
    
  } catch (error) {
    res.status(404).send(console.error(error));
  }
});

module.exports = router;