const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");

router.get('/mainpage',function(req,res)
{
    //Product.addProducts();
    res.sendFile(path.join(__dirname,'../views/public/mainPage.html'))
})

router.post('/mainpage',async function(req,res) {
    const products = await productController.getAllProducts();
    res.send(products);
});



module.exports = router;