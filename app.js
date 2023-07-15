const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');
const { verifyAdmin } = require('./src/helpers/middlewares');
const loginRoutes = require('./src/routes/loginRoute');
const adminRoutes = require('./src/routes/adminRoute');
const mainPageRoutes = require('./src/routes/mainPageRoute');
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cookieParser());
app.use('/login', loginRoutes);
app.use('/admin*', verifyAdmin);
app.use('/admin', adminRoutes);
app.use('/mainPage', mainPageRoutes);
app.use('/', require(__dirname + '/src/routes/registerRoute'));
app.use('/', require(__dirname + '/src/routes/cartRoute'));
app.use('/',require(__dirname + '/src/routes/userDetailsRoute'));
app.use('/', require(__dirname + '/src/routes/succeedRoute'));
app.use('/', require(__dirname + '/src/routes/orderHistoryRoute'));

require('dotenv').config();
// const { default: mongoose } = require("mongoose");
require('./src/helpers/init_mongodb');

const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.redirect('/mainPage');
});
app.use('/', router);
//Reload static files and change content type to js
app.use(express.static(__dirname + '/src/views/public'));
app.use('/jsFiles', express.static(__dirname + '/src/views/jsFiles'));
app.use('/cssFiles', express.static(__dirname + '/src/views/cssFiles'));
app.use('/resources', express.static(path.join(__dirname, 'src/resources')));

///////////////////////////////////////////WebSocket
var expressWs = require('express-ws')
expressWs(app);

var clients = 0;
app.ws('/', (ws, req) => 
{
  ws.send(clients)

  ws.on('message', function(message) 
  {
      if (message === "client")
      {
        clients+=1;
      }

      if (message === "bye client")
      {
        clients-=1;
      }
  });

})

const port = process.env.PORT;
app.listen(port, function () {
  console.log("Server running on port " + port);
})
