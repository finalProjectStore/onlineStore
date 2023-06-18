const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('mongodb connected.');
  })
  .catch((err) => {
    console.log('Failed to connect mongodb: ' + err.message);
  });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db');
});

mongoose.connection.on('error', (err) => {
    console.log(err.message);    
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connetction is disconnected.');
});


//////// Close mongoose connection after press control+C //////////
process.on('SIGINT', async() => {
    await mongoose.connection.close();
    process.exit(0);
});
