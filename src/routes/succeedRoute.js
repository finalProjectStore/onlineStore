const express = require("express");
const router = express.Router();
const path = require('path');



router.get('/succeed',function(req,res)
{
    res.sendFile(path.join(__dirname,'../views/public/succeed.html')) // Solve route error. check what is path.join().
});


module.exports = router;
