const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/cart', function (req, res) {

    res.sendFile(path.join(__dirname, '../views/public/cart.html'));
});

module.exports = router;