const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

//Export the model
module.exports = mongoose.model('users', UserSchema);