const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController")

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/admin.html'));
});

router.get('/getAllProducts', async function (req, res) {
    const products = await productController.getAllProducts();
    res.json({ products });
});

router.post('/removeProduct', async function (req, res) {
    const { id } = req.body; 
    await productController.removeProduct(id);
});

module.exports = router;