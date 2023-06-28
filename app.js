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







//routes
app.use('/', require(__dirname + '/src/routes/loginRoute'));
app.use('/', require(__dirname + '/src/routes/registerRoute'));
app.use('/', require(__dirname + '/src/routes/mainPageRoute'))
app.use('/', require(__dirname + '/src/routes/cartRoute'));

app.use('/', require(__dirname + '/src/routes/adminRoute'));

app.use('/',require(__dirname + '/src/routes/userDetailsRoute'));
app.use('/', require(__dirname + '/src/routes/succeedRoute'));



var expressWs = require('express-ws')
expressWs(app);

var users_number_on_site = 0;
app.ws('/mainpage', (ws, req) =>  // user after login
{
  //ws.send("hey");
  const start = Date.now();
  users_number_on_site+=1;
  ws.send(users_number_on_site)
  console.log("Number of users after login: " + users_number_on_site);

  ws.on('close', function ()  // user exit site
  {
    const end = Date.now();
    var seconds = (((end-start) % 60000) / 1000).toFixed(0);
    console.log(`Client Time: ${seconds} secnods`);
  })
})



const port = process.env.PORT;
app.listen(port, function () {
  console.log("Server running on port " + port);

})
