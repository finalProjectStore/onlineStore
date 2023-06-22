const bcrypt = require('bcrypt'); // To generate and validate hashes, bcrypt library that comes with Node.
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
  },
  email: {
    type: String,
    unique: true,
    lowercase:true,// email is not case sensitive so:  abc@g.com and ABC@g.com are the same!!
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  age: { type: Number, required: [true, "can't be blank"] },

  password: {
    type: String,
    require: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },
});


///////  excrypt username password  ////////////
UserSchema.pre('save', async function() {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    
  } catch (error) {
    console.log(error);
  }
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema); // create User collection

module.exports = User;
