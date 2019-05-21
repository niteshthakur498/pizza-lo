let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let orderschema = new Schema({
	name : {
		type : String,
		required :true
	},
	email:{
		type : String,
		required :true
	},
	phone : {
		type : Number,
		required :true
	},
	address : {
		type: String,
		required : true
	},
	city : {
		type: String,
		required: true
	},
	pizzaType : {
		type: String,
		required: true
	},
	pizzaSize : {
		type: String,
		required: true
	},
	pizzaDough : {
		type: String,
		required: true
	},
	completed : {
		type: Boolean,
		default: false
	}
});

const Order = mongoose.model('Order', orderschema);

module.exports = Order;