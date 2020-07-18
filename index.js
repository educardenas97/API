'use strict'
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const urlAtlas = 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true';
const urlLocal = 'mongodb://127.0.0.1:2700/?useUnifiedTopology=true';
// Database Name
const dbName = 'reservation';

const client = new MongoClient(urlLocal);

var app = require('./app');
var port = 3000;

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to MongoDB Server");
    const db = client.db(dbName);
    app.listen(port, () => {
        console.log("NodeJS server running on http://localhost:3000");
    });
    client.close();
});



