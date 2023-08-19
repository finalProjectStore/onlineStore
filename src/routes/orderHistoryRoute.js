const express = require("express");
const router = express.Router();
const path = require('path');
const orderController = require('../controllers/orderController');


router.get('/orderHistory', function(req,res) {
    res.sendFile(path.join(__dirname,'../views/public/orderHistory.html'));

});
router.post('/orderHistory',async function(req,res) {
    const carts = await orderController.getAllCartsByUser(req.body.username);
    res.send(carts);
})

module.exports = router;