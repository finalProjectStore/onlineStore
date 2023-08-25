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
    try {
        const products = await productController.getAllProducts();
        res.status(200).json({success:true, products });
    } catch (error) {
        res.status(404).json({success:false, error:error })
    }
});

router.post('/removeProduct', async function (req, res) {
    const { _id } = req.body; 
    await productController.removeProduct(_id);
});


router.get('/getAllUsers', async function (req, res) {
    try {
        const users = await userController.getAllUsers();
        res.status(200).json({ users });
    } catch (error) {
        res.status(404).json({error:error})
    }
    
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
router.get('/lastWeekAmountPerDay', async function (req, res) {
    const userList = await userController.getAllUsers(); 
    const orders = await orderController.getOrdersWithinRange(userList);
    res.json({ orders });
    // try {
    //     const today = new Date();
    //     const lastWeekStartDate = new Date(today);
    //     lastWeekStartDate.setDate(today.getDate() - 7);
    
    //     const orders = await orderController.getOrdersWithinRange(lastWeekStartDate, today);
    //     console.log("orders:",orders);
    
    //     const amountPerDay = {};
    
    //     orders.forEach(order => {
    //         const orderDate = new Date(order.date); // Assuming your order object has a 'date' field
    //         const day = orderDate.toISOString().split('T')[0];
    //         console.log(amountPerDay[0]);
    //         if (!amountPerDay[day]) {
    //             amountPerDay[day] = 0;
    //         }
    
    //         amountPerDay[day] += order.totalAmount; // Assuming your order object has a 'totalAmount' field
    //     });
    //     console.log(amountPerDay);
       
    //     res.json({ amountPerDay });
    // } catch (error) {
    //     console.error("Error:", error);
    //     res.status(500).json({ error: "An error occurred while fetching data." });
    // }
});



module.exports = router;