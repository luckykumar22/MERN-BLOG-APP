const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    title:String,
    description:String,
    file:String,
});

//Export the model
module.exports = mongoose.model('posts', postSchema);