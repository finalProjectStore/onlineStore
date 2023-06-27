const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');




require('dotenv').config();
// const { default: mongoose } = require("mongoose");
require('./helpers/init_mongodb');

const app = express();
const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


//Reload static files and change content type to js
app.use(express.static(__dirname + '/src/views/public'));
app.use('/jsFiles', express.static(__dirname + '/src/views/jsFiles'));
app.use('/cssFiles', express.static(__dirname + '/src/views/cssFiles'));
app.use('/productsImages', express.static(path.join(__dirname, 'src/resources/productsImages')));



// mongoose.connect('mongodb://localhost:27017/E-commerce',{ useNewUrlParser: true});



//routes
app.use('/', require(__dirname + '/src/routes/loginRoute'));
app.use('/', require(__dirname + '/src/routes/registerRoute'));
app.use('/', require(__dirname + '/src/routes/mainPageRoute'))
app.use('/', require(__dirname + '/src/routes/cartRoute'));


const port = process.env.PORT;
app.listen(port, function () {
  console.log("Server running on port " + port);

})
