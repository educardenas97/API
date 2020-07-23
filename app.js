'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let reservation = require('./src/routes/reservationRoutes'); 
let user = require('./src/routes/userRoutes');

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/reservation', reservation);
app.use('/user',user);


module.exports = app;