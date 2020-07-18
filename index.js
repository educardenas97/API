const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let url = {
    'docker': 'mongodb://127.0.0.1:2700/?useUnifiedTopology=true',
    'local': 'mongodb://localhost:27000/?useUnifiedTopology=true',
    'atlas': 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true',
};

const dbName = 'reservation';
let app = require('./app');
let port = 3000;

let client = new MongoClient(url.docker);
// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log(`Connected successfully to MongoDB `);
    exports.MongoClient = client.db(dbName);
    app.listen(port, () => {
        console.log(`NodeJS server running on http://localhost:${port}`);
    });
    client.close();
});