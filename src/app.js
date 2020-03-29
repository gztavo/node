'use strict' //Força o javascript ser criterioso 

const express = require('express');
const bodyParser = require('body-parser');//Converter Objeto para JSON
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao Banco
mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0-eq6jb.azure.mongodb.net/test')

//Carregar os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;