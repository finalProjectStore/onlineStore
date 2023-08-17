const express = require("express");
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const userController = require("../controllers/userController");


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/admin.html'));
});

router.post('/updateOrder', async function (req, res) {
    const { cartId, confirmationStatus } = req.body;
    orderController.updateConfirmationStatus(cartId, confirmationStatus);
});

router.get('/getAllOrders', async function (req, res) {
    const orders = await orderController.getAllOrders();
    res.status(200).json({ orders });
});

router.get('/getAllProducts', async function (req, res) {
    const products = await productController.getAllProducts();
    res.status(200).json({ products });
});

router.post('/removeProduct', async function (req, res) {
    const { _id } = req.body; 
    await productController.removeProduct(_id);
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


router.post('/deleteUser' , async function (req,res)
{
    const username = req.body.username;
    await userController.deleteUser(username);
    res.status(200).send()
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