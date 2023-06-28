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



const order = await Order.findOne({username:username})

order.carts.push(
    {
        price : price,
        products : titles
    })
order.save();


}






module.exports = { newOrder , addCartToOrder};
