const express = require("express");
const router = express.Router();
const path = require('path');
const { verifyToken } = require('../helpers/middlewares');
// Controller
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");

router.get('/cart', verifyToken, function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});

router.post('/cart', function (req, res) 
{
    orderController.addCartToOrder(req.body.username,req.body.price,req.body.products);
    productController.updateManyProducts(req.body.updatedProducts);
    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});

module.exports = router;