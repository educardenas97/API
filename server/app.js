'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let user = require('../api/routes/user.routes');
let product = require('../api/routes/product.routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',user);
app.use('/product', product);


module.exports = app;