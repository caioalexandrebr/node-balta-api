'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// loading mongodb
mongoose.connect('mongodb://localhost:27017/node_balta_api', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// loading models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// loading routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;