const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        username: 
        {
            type: String,
            unique: true,
            required: [true, "can't be blank"],
            match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        },

        carts: 
            [{
                created: 
                {
                    type: Date,
                    default: Date.now,
                },
                price: Number,
                products:[String],
                confirmationStatus: {
                    type: String,
                    default: 'Pending'
                }
            }]
    })




const Order = mongoose.model('orders',OrderSchema ); // create User collection

module.exports = Order;