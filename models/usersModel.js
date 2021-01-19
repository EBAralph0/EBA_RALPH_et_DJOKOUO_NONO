var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'name' : String,
	'nickname' : String,
	'email':String,
	'password':String,
	'birthday' : String,
	'job' : String,
	'organisation' : String
});

module.exports = mongoose.model('users', usersSchema);
