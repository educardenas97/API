'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user = require('./src/routes/reservationRoutes'); 
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/reservation', user);


module.exports = app;