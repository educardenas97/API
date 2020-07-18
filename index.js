'use strict'
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbName = 'reservation';
const mongoRun = 'docker'


var app = require('./app');
var port = 3000;


switch(mongoRun){
    case 'docker':
        const urlDocker = 'mongodb://127.0.0.1:2700/?useUnifiedTopology=true';
        var client = new MongoClient(urlDocker);
        break;
    case 'local':
        const urlLocal = 'mongodb://localhost:27000/?useUnifiedTopology=true';
        var client = new MongoClient(urlLocal);
        break;
    default:
        const urlAtlas = 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true';
        var client = new MongoClient(urlAtlas);
        break;
}
// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log(`Connected successfully to MongoDB ${mongoRun}`);
    const db = client.db(dbName);
    app.listen(port, () => {
        console.log("NodeJS server running on http://localhost:3000");
    });
    client.close();
});


