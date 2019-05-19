let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let orderschema = new Schema({
	name : {
		type : String,
		required :true
	},
	phone : {
		type : Number,
		required :true
	},
	house : {
		type : Number
	},
	address : {
		type: String,
		required : true
	},
	city : {
		type: String,
		required: true
	}
});

const User = mongoose.model('User', orderschema);

module.exports = User;