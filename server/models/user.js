const mongoose = require('mongoose');
// Schema is what we use to tell mongoose about the particular fields that we have
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


// Define our model => Schema is an object that we are using to define our columns and their
// data types.  We need our user to be unique and to ensure that, everything is saved in lowercase
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true }, 
	password: String
})

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
	// the context of the function is the user model; we are getting access to the user model
	const user = this;

	// generate a salt then run callback
	bcrypt.genSalt(10, function(err, salt) {
		if (err) { return next(err); }

		// after creating salt, hash (encrypt) our password using salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) { return next(err); }

			// overwrite plain text password with encrypted password
			user.password = hash;
			next();
		})
	})
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) { return callback(err); }

		callback(null, isMatch);
	});
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;








