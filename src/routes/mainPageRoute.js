const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/mainpage',function(req,res){
    res.sendFile(path.join(__dirname,'../views/public/mainPage.html'))
})




module.exports = router;