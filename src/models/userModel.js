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

  isAdmin: {
    type: Boolean,
    default: false,
  },

  created: {
    type: Date,
    default: Date.now(),
  },
});


  /// user could change his name
  UserSchema.methods.changeUsername = function(newUsername)
  { 
    this.username = newUsername;
    return this.save();
  } 

  /// user could change his password
  UserSchema.methods.changePassword = function(newPassword){
    if(!this.comparePassword(newPassword)){
      this.password = newPassword;
      return this.save();
    }
    return 'Choose a different password,'
  }

  /// user could change his email address
  UserSchema.methods.changeEmail = function(newEmail){
      this.email = newEmail;
      return this.save();
    }


  
  /// change the user's status (admin or not)
  UserSchema.methods.changeIsAdmin = function(){
    return !this.isAdmin;
  }

///////  excrypt username password  ////////////
UserSchema.pre('save', async function() {
  try {
    if(this.isModified('password')|| this.isNew ){ /// check if the password has been modified or a new user registered
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(this.password, salt);
      this.password = hashedPassword;
    }
    
  } catch (error) {
    console.log(error);
  }
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema); // create User collection

module.exports = User;
