const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const router = express.Router();
const loginRoutes = require('./src/routes/loginRoute');
const adminRoutes = require('./src/routes/adminRoute');
const mainPageRoutes = require('./src/routes/mainPageRoute');
const app = express();
app.use(express.json());
app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/mainPage', mainPageRoutes);
app.use('/', require(__dirname + '/src/routes/registerRoute'));
app.use('/', require(__dirname + '/src/routes/cartRoute'));
app.use('/',require(__dirname + '/src/routes/userDetailsRoute'));
app.use('/', require(__dirname + '/src/routes/succeedRoute'));

require('dotenv').config();
// const { default: mongoose } = require("mongoose");
require('./helpers/init_mongodb');

const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// TODO:
router.get('/', function(req, res)
{
  return res.redirect('/mainpage');
});

//Reload static files and change content type to js
app.use(express.static(__dirname + '/src/views/public'));
app.use('/jsFiles', express.static(__dirname + '/src/views/jsFiles'));
app.use('/cssFiles', express.static(__dirname + '/src/views/cssFiles'));
app.use('/resources', express.static(path.join(__dirname, 'src/resources')));

const port = process.env.PORT;
app.listen(port, function () {
  console.log("Server running on port " + port);
})
