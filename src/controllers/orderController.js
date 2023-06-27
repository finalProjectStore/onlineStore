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

    for (let i =0;i<products.length;i++)
    {
        titles.push(products[i].title);
    }



const order = await Order.findOne({username:username})

order.carts.push(
    {
        price : price,
        products : titles
    })
order.save();


}






module.exports = { newOrder , addCartToOrder};
