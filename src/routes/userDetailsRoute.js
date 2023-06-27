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