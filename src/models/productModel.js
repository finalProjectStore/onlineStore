const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    id:
    {
        type:Number,
        required:[true,"Entry id"]
    },

        image:
        {
            type:String,
            required:[true,"Enter image path"]
        },

        title:
        {
            type:String,
            required:[true,"Enter product title"],
            lowercase:true,
            unique :true
        },


    
        description:
        {
        type:String,
        required:[true,"Enter Product description"]
        },


        quantity:
        {
            type:Number,
            required:[true,"Enter Quantity"]
        },


        price:
        {
            type:Number,
            required:[true,"Enter price"]
        },


        type:
        {
            type:String,
            required:[true,"Enter product"]
        },

        color:
        {
            type:String,
        required:[true,"Enter color"]
        }



})


const Product = mongoose.model('Product', productSchema); // create Product collection

module.exports = Product;