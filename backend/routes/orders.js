let express = require('express');
let router = express.Router();



let Order = require('../models/orderSchema');

router.post('/placeorders',(req,res) => {
	
});

router.get('/',(req,res) => {
	res.send('HIIIII');
});


module.exports = router ;