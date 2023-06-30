const express = require("express");
const router = express.Router();
const path = require('path');

// Controller
const orderController = require("../controllers/orderController");

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.redirect('/login');
    }

    JsonWebTokenError.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        next();
    });
}

router.get('/cart', verifyToken, function (req, res) {

    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});



router.post('/cart', function (req, res) 
{
    orderController.addCartToOrder(req.body.username,req.body.price,req.body.products);
    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});

module.exports = router;