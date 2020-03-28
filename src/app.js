'use strict' //Força o javascript ser criterioso 

const express = require('express');
const bodyParser = require('body-parser');//Converter Objeto para JSON
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao Banco
mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0-utwlm.azure.mongodb.net/test')

//Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;