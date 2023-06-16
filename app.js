const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require('./src/models/user');

app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect('mongodb://localhost:27017/E-commerce',{ useNewUrlParser: true});


//routes
app.use('/',require(__dirname+'/src/routes/login'));
app.use('/',require(__dirname+'/src/routes/register'));





app.listen(3000,function()
{
  console.log("Server listening");
})
