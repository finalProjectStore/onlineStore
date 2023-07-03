const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");

router.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'../views/public/mainPage.html'))
})

router.get('/getAllProducts', async function (req, res) {
    const products = await productController.getAllProducts();
    res.json({ products });
});

module.exports = router;