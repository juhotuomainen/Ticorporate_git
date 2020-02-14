// const express = require('express');
// const bodyParser = require('body-parser');
// const router = express.Router();

// const add = require('./addMuistiinpano.js');

const getDb = require('./database').getDb;

class Muistiinpano {
  constructor(otsikko, kurssi, muistiinpano) {
    this.otsikko = otsikko;
    this.kurssi = kurssi;
    this.muistiinpano = muistiinpano;
  }
  tallenna() {
    const db = getDb();
    return db
      .collection('muistiinpanot')
      .insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
  static lataa() {
    const db = getDb();
    return db
      .collection('muistiinpanot')
      .find()
      .toArray()
      .then(muistiinpanot => {
        console.log(muistiinpanot);
        return muistiinpanot;
      })
      .catch(err => console.log(err));
  }
}

// router.post('/muistiinpanot', function(req, res) {
//   muistio = req.body;
//   // add.();
//   res.send('Lisätty muistiinpanoihin');
// });

// router.get('/about', function(req, res) {
//   res.send('About birds');
// });

module.exports = Muistiinpano;
