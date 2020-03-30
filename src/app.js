'use strict' //Força o javascript ser criterioso 

const express = require('express');
const bodyParser = require('body-parser');//Converter Objeto para JSON
const mongoose = require('mongoose');
const config = require('./config');


const app = express();
const router = express.Router();

//Conecta ao Banco
mongoose.connect(config.connectionString);

//Carregar os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');



app.use(bodyParser.json({
    limit: '5mb' //limite de 5 megas do json
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//URL que vão acessar API
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;