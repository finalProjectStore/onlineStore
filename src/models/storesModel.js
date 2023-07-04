const mongoose = require('mongoose');

const StoresSchema = new mongoose.Schema(
    {
       storeName:{
            type: String,
        }, 
        address:{
            type: String,
        }
      
    })




const Store = mongoose.model('store',StoresSchema ); // create store collection

module.exports = Store;