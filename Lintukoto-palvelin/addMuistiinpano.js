const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url =
  'mongodb+srv://henri:7Eq3nDZ2qpR0DpHT@cluster0-3mfrw.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'Lintukoto';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log('Connected correctly to server');

  const db = client.db(dbName);

  // Insert a single document
  db.collection('tehtavat').insertOne(
    {
      kurssi: 'Websovelluskehitys',
      tehtava: 2,
      deadline: '2020-02-22'
    },
    function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);

      // Insert multiple documents
      db.collection('tehtavat').insertMany(
        [
          {
            kurssi: 'Ohjelmointi',
            tehtava: 12,
            deadline: '2020-02-03'
          },
          {
            kurssi: 'Ohjelmointi',
            tehtava: 11,
            deadline: '2020-02-12'
          }
        ],
        function(err, r) {
          assert.equal(null, err);
          assert.equal(2, r.insertedCount);

          client.close();
        }
      );
    }
  );
});

module.exports = client;
