const express = require('express');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

app.use(cors());

//const reitit = require('./app/routes/muistiinpano.routes');

mongoose.Promise = global.Promise;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/', reitit);

// app.get('/', (req, res) => {
//   res.json({ message: 'Tervetuloa lintukoto-sovellukseen!' });
// });
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to the database');
    app.listen(3000);
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

require('./app/routes/muistiinpano.routes.js')(app);
require('./app/routes/kurssi.routes.js')(app);
require('./app/routes/tehtava.routes.js')(app);

// MongoConnect(() => {
// });
