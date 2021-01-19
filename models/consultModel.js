var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var consultSchema = new Schema({
    'nameDoctors' : String,
    'nameUsers': String,
	'dateDebut' : Date,
    'dateFin': Date
});

module.exports = mongoose.model('consult', consultSchema);
