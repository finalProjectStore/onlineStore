const express = require("express");
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');

// Controller
const orderController = require("../controllers/orderController");

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    // TODO:
    console.log('the token', token);
    if (!token) {
        console.log('the token again', token);
        return res.redirect('/login');
    }

    console.log('token exists');
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            console.log('token err', err);
        }
        console.log('decodedToken', decodedToken);
        next();
    });
}


router.get('/cartRedirect', verifyToken, function (req, res) {
    return res.redirect('/cart');
});


router.get('/cart', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});



router.post('/cart', function (req, res) 
{
    orderController.addCartToOrder(req.body.username,req.body.price,req.body.products);
    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});

module.exports = router;