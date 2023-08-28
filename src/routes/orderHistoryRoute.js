const express = require("express");
const router = express.Router();
const path = require('path');
const orderController = require('../controllers/orderController');
const { verifyToken } = require('../helpers/middlewares');


router.get('/orderHistory',verifyToken, function(req,res) {
    res.sendFile(path.join(__dirname,'../views/public/orderHistory.html'));

});
router.post('/orderHistory',async function(req,res) {
    try {
        const carts = await orderController.getAllCartsByUser(req.body.username);
        const listOfDetails = await orderController.calculateAvgCartPrice(req.body.username);
        var response = {carts,listOfDetails};
        res.status(200).json(response);
    } catch (error) {
        res.status(400);
    }
})


module.exports = router;