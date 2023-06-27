const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

//Export the model
module.exports = mongoose.model('users', userSchema);