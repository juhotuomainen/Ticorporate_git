const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = cb => {
  MongoClient.connect(
    'mongodb+srv://henri:7Eq3nDZ2qpR0DpHT@cluster0-3mfrw.mongodb.net/Lintukoto?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db('Lintukoto');
      console.log(_db);
      cb(client);
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'Tietokantaa ei löytynyt';
};
exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
