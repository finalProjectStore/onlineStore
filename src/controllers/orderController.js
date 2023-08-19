const Order = require('../models/orderModel');
const ObjectId = require('mongoose').Types.ObjectId; 

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
    await Order.findOneAndUpdate(
        { 'carts._id': new ObjectId(cartId) }, 
        { $set: { 'carts.$.confirmationStatus': confirmationStatus } });
}

const getAllCartsByUser = async function(username){
    const userOrders = await Order.findOne({username});
    const carts = userOrders.carts;
    return carts;
}

const calculateAvgCartPrice = async function (username) {
    
    try {
        const result = await Order.aggregate([
            {
                $match: {username:username}
            },
            {// break carts array to single objects
                $unwind: "$carts"
            },
            {
                // $group - groups the documents back together based on the _id field. 
                // $avg - calculates the average price within each group.
                $group: { 
                    _id: "$username",
                    avgCartPrice: { $avg: "$carts.price" }
                }
            }
        ]);
        return result;
    } catch (error) {
        console.error(error);
    }


}

module.exports = { newOrder , addCartToOrder, getAllOrders, updateConfirmationStatus, getAllCartsByUser,calculateAvgCartPrice };
