'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/node_balta_api', {useNewUrlParser: true});

// loading routes
const index = require('./routes/index-route');
const product = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', index);
app.use('/products', product);

module.exports = app;