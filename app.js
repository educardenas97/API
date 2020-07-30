'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let reservation = require('./src/routes/reservation.routes'); 
let user = require('./src/routes/user.routes');
let product = require('./src/routes/product.routes');

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/reservation', reservation);
app.use('/user',user);
app.use('/product', product);


module.exports = app;