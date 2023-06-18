const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();
const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/src/views/public'));
app.use('/jsFiles', express.static(__dirname + '/src/views/jsFiles'));
app.use('/cssFiles', express.static(__dirname + '/src/views/cssFiles'));



// mongoose.connect('mongodb://localhost:27017/E-commerce', { useNewUrlParser: true });


//routes
app.use('/', require(__dirname + '/src/routes/loginRoute'));
app.use('/', require(__dirname + '/src/routes/registerRoute'));
app.use('/', require(__dirname + '/src/routes/mainPageRoute'))
app.use('/', require(__dirname + '/src/routes/cartRoute'));



app.listen(3000, function () {
  console.log("Server listening");
})
