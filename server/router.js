const Authentication = require('./controllers/authentication')

module.exports = function(app) {
	// rec = request; res = response; next = mostly for error handling
	app.post('/signup', Authentication.signup)
}