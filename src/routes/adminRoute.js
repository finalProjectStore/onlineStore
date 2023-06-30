const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/admin.html'));
});

router.get('/getAllProducts', async function (req, res) {
    const products = await productController.getAllProducts();
    res.json({ products });
});

router.post('/removeProduct', async function (req, res) {
    const { _id } = req.body; 
    await productController.removeProduct(_id);
});

router.post('/updateProduct', async function (req, res) {
    const product = req.body; 
    await productController.updateProduct(product);
});

router.post('/addProducts' , async function (req,res){
    const products = req.body;
    await productController.addNewProducts(products);
});

module.exports = router;