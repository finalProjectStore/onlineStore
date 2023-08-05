const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");

router.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'../views/public/mainPage.html'))
})

router.get('/getAllProducts', async function (req, res) {
    // productController.addProducts(); add only if you need to load products to the db 
    const products = await productController.getAllProducts();
    res.json({ products });
});

module.exports = router;