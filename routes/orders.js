let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let router = express.Router();

let mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Orders" ||"mongodb://deepesh:deepesh123@ds261296.mlab.com:61296/pizza-lo"
					,{ useNewUrlParser: true },(err)=>{
						if(err){
							console.log("Error Mongo")
						}
						else{
							console.log("Mongo Connected");
						}
					});
let Order = require('../models/orderSchema');


router.use(cors());
//Using Body parser for middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json({strict:false}));

router.post('/',(req,res) => {
	let data = req.body;
	var order = new Order(data);
	console.log(order);
	order.save((err, order, numAffected) => {
		if(err){
            console.log(err);
            res.send('500');
          }
       else{
        console.log("Added",order);
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

router.delete('/:id',(req,res)=>{
	Order.findOneAndDelete({_id:req.params.id})
		.then(response=>{
			res.send(response)
		})
		.catch(err=>{
			console.log(err)
		})
});

router.put('/:id',(req,res)=>{
	let data = {
		completed : true
	}
	Order.findOneAndUpdate({_id:req.params.id},{completed:true},(err,response)=>{
		console.log('Updataed')
		res.send(response)
	});
});


module.exports = router ;