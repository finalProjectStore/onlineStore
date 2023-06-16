const express = require("express");
const router = express.Router();
const path = require('path');


router.post('/register', function(req,res) {
    console.log(req.body.password1);
    res.send("bkabkabla");

})

router.get('/register',function(req,res)
{
  res.sendFile(path.join(__dirname,'../views/public/register.html')) // Solve route error. check what is path.join().
});

module.exports = router;
