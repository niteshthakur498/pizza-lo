const express = require('express');
const app = express();

const Orders = require('./routes/orders')

app.use('/orders',Orders);

module.exports = app;