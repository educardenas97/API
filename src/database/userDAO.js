const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbName = 'reservations';
let url = {
    'docker':  'mongodb://127.0.0.1:2700/?useUnifiedTopology=true',
    'local': 'mongodb://localhost:27000/?useUnifiedTopology=true',
    'atlas': 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true',
};

var client = new MongoClient(url.docker);
// Use connect method to connect to the Server
exports.insertOne = (doc) => {
    client.connect((err) => {
        assert.equal(null, err);
        console.log(`Connected successfully to MongoDB `);
        let dbo = client.db(dbName);
        
        dbo.collection('reservations').insertOne(doc, (err,result) => {
            if (err) throw err;
            console.log(result.insertedCount);
            client.close();
        });
        
    });
};