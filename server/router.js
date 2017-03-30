module.exports = function(app) {
	// rec = request; res = response; next = mostly for error handling
	app.get('/', function(rec, res, next) {
		res.send(['string 1', 'another string', 'water bottle'])
	});
}