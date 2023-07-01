const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");


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


router.get('/getAllUsers', async function (req, res) {
    const users = await userController.getAllUsers();
    res.json({ users });
});

router.get('/getAllUsersCount', async function (req, res) {
    const usersCount = await userController.getAllUsersCount();
    res.json({ usersCount });
});

router.get('/getTotalAmount', async function (req, res) {

    const totalAmount = await userController.getTotalAmount();
    res.json({ totalAmount });
});





router.post('/updateProduct', async function (req, res) {
    const product = req.body; 
    await productController.updateProduct(product);
});


module.exports = router;