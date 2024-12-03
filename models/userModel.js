// Importing dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Defining the user schema
const userSchema = new mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, require : true},
    role : {type : String, enum : ['Admin','User','Moderator'], default : 'User'}
});

// Middleware to hash the password before saving the user document
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next()
    };
    this.password = await bcrypt.hash(this.password,10);
    next();
})

// Method to compare provided password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model('User',userSchema);