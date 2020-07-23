const MongoClient = require('mongodb').MongoClient;
let userDAO = require('./src/database/userDAO');
let reservationDAO = require('./src/database/reservationDAO');
let app = require('./app');
let port = 3000;


let url = {
    'docker':  'mongodb://127.0.0.1:2700/?useUnifiedTopology=true',
    'local': 'mongodb://localhost:27000/?useUnifiedTopology=true',
    'atlas': 'mongodb+srv://apiDevelop:0982@cluster0.yrdbq.gcp.mongodb.net/reservation?retryWrites=true&w=majority&useUnifiedTopology=true',
};

var mongoClient = new MongoClient(url.docker);

mongoClient.connect()
    .catch(err => {
      console.error(err.stack);
      process.exit(1);
    })
    .then(async client => {
      await userDAO.injectDB(client);
      await reservationDAO.injectDB(client);
      app.listen(port, () => {
        console.log(`listening on port ${port}`);
      });
    });