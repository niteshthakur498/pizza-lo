let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let router = express.Router();

let mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/Orders" ,{ useNewUrlParser: true });
let Order = require('../models/orderSchema');


router.use(cors());
//Using Body parser for middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json({strict:false}));

router.post('/placeOrder',(req,res) => {
	let data = req.body;
	var order = new Order(data);
	console.log(order);
	order.save((err, order, numAffected) => {
		if(err){
            console.log(err);
            res.send('500');
          }
       else{
        console.log("Adder",order);
        res.send(order);
       }
	})
});
router.get('/',(req,res) => {
	Order.find({},(err,data) => {
		if(err){
			console.log("Error" , err)
		}else{
			res.send(data);
		}
	})
});

router.delete('/delete',(req,res)=>{
	Order.findByIdAndRemove({_id:req.body.id}).then(response=>{
		res.send(response)
	})
});


module.exports = router ;