const mongoose = require('mongoose');
// Schema is what we use to tell mongoose about the particular fields that we have
const Schema = mongoose.Schema;


// Define our model => Schema is an object that we are using to define our columns and their
// data types.  We need our user to be unique and to ensure that, everything is saved in lowercase
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true }, 
	password: String
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;








