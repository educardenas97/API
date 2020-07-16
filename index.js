'use strict'
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true';
// Database Name
const dbName = 'reservation';

const client = new MongoClient(url);

var app = require('./app');
var port = 3000;

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    // CREAR EL SERVIDOR WEB CON NODEJS
    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:3000");
    });
    client.close();
});



