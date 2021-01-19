var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var doctorSchema = new Schema({
	'name' : String,
	'nickname' : String,
	'birthday' : Date,
    'speciality':String
});

module.exports = mongoose.model('doctor', doctorSchema);
