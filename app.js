const express = require('express');
const app = express();
const path = require('path')

const Orders = require('./routes/orders')

app.use('/api/orders',Orders);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/frontent/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'frontend','build', 'index.html'));
        
    });
}

module.exports = app;