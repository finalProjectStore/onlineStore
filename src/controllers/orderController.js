const Order = require('../models/orderModel');


const newOrder = async function (username) 
{

    const checkIfOrderExist = await Order.findOne({username:username})
    if (checkIfOrderExist)
    {
        return;
    }

    const order = new Order
    ({
        username:username,
    });    
    order.save();
}



const addCartToOrder = async function (username,price,products) 
{
    let titles = [];
    const productsJson = JSON.parse(products);

    for (let i =0;i<productsJson.length;i++)
    {
        titles.push(productsJson[i].title);
    }

    let order = await Order.findOne({username:username});
    if (!order) {
        order = await Order.create({ username, carts: [] });
    }

    order.carts.push(
        {
            price : price,
            products : titles
        })
    order.save();
}

const getAllOrders = async function () {
    const query = Order.find();
    const allOrders = await query.exec();
    return allOrders;
}

const updateConfirmationStatus = async function (cartId, confirmationStatus) {
    Order.findOneAndUpdate(
        {  'carts._id': cartId }, 
        { $set: { 'carts.$.confirmationStatus': confirmationStatus } });
}

module.exports = { newOrder , addCartToOrder, getAllOrders, updateConfirmationStatus };
