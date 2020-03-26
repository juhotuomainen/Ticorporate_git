const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kurssi = require('../models/kurssi.model');
const Kayttaja = require('../models/user.model');
const Muistiinpano = require('../models/muistiinpano.model');
const url = require('../../config/database.config');

const mongoose = require('mongoose');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }
  console.log(req.body.nimi);
  let opintopisteet;

  Kurssi.findOne({ nimi: req.body.nimi })
    .then(kurssi => {
      console.log(kurssi);
      opintopisteet = kurssi.opintopisteet;
    })
    .catch(err => {
      console.log(err);
    })
    .then(lol => {
      console.log(this.opintopisteet);

      const aktiivinen = new Object({
        kurssikoodi: req.body.kurssikoodi,
        nimi: req.body.nimi,
        kuva: req.body.kuva,
        muistiinpanot: [{}],
        aikataulu: true,
        opintopisteet: opintopisteet
      });

      Kayttaja.Kayttaja.findOneAndUpdate(
        { tunnus: req.body.tunnus },
        {
          $push: { aktiiviset_kurssit: aktiivinen }
        },
        { upsert: true }
      ).then(res.status(200).redirect('http://localhost:4200/aktiiviset'));
    });

  // const aktiivinen = new AktiivinenKurssi({
  //   kurssikoodi: req.body.kurssikoodi,
  //   nimi: req.body.nimi,
  //   kuva: req.body.kuva,
  //   muistiinpanot: req.body.muistiinpanot
  // });
  // const useri = Kayttaja.findOne({ tunnus: req.body.tunnus });
  // console.log(useri.nimi + 'Testaushommia 666 !!!!!!!!!!');
  // useri.kurssit.update(aktiivinen);

  // useri
  //   .save()
  //   .then(result => {
  //     res.status(200).redirect('http://localhost:4200/aktiiviset');
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: err.message || 'Some error occurred while creating the Note.'
  //     });
  //   });
};

exports.findAll = (req, res) => {
  console.log('tunnus --->>' + req.query.tunnus);
  Kayttaja.Kayttaja.findOne({ tunnus: req.query.tunnus }).then(result => {
    console.log(result);
    res.send(result);
  });
  // AktiivinenKurssi.find()
  //   .then(notes => {
  //     res.send(notes);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: err.message || 'Some error occurred while retrieving notes.'
  //     });
  //   });
};

exports.find = (req, res) => {
  console.log(req.body);
  AktiivinenKurssi.find(req.body.kurssikoodi)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Kurssia ei löytynyt' + req.body.kurssikoodi
        });
      }
      res.send(note);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.body.kurssikoodi
        });
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.body.kurssikoodi
      });
    });
};

exports.finderi = (req, res, next) => {
  const kurssikoodi1 = req.body.kurssi;
  const muistiinpanoObject = {
    kurssi: req.body.kurssi,
    muistiinpano: req.body.muistiinpano,
    otsikko: req.body.otsikko
  };

  AktiivinenKurssi.find({ kurssikoodi: kurssikoodi1 }, (err, mp) => {
    console.log('lol');
    mp.muistiinpanot.$push(muistiinpanoObject);
    mp.save();
  })
    .then(res.send('ok'))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Note.'
      });
    });
};

exports.findjaupdate = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dataa ei löytynyt'
    });
  }
  console.log(req.body);

  // const user =  Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });
  Kayttaja.Kayttaja.updateOne(
    {
      tunnus: req.body.tunnus,
      'aktiiviset_kurssit.nimi': req.body.kurssi
    },
    { $push: { 'aktiiviset_kurssit.$.muistiinpanot': req.body } }
  )
    .then(res.status(200).redirect('http://localhost:4200/aktiiviset'))
    .catch(err => {
      console.log(err);
    });

  // const muistiinpano = new Muistiinpano({
  //   kurssi: req.body.kurssi,
  //   otsikko: req.body.otsikko,
  //   muistiinpano: req.body.muistiinpano,
  //   tunnus: req.body.tunnus
  // });
  // muistiinpano.save().then(result => {
  //   const user = Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });
  //   for (i in user.aktiiviset_kurssit.nimi) {
  //     if (user.aktiiviset_kurssit.nimi[i] == req.body.kurssi) {
  //       user.aktiiviset_kurssit.muistiinpanot.push(result);
  //       user.save();
  //     }
  //   }
  //   res
  //     .status(200)
  //     .json({ message: 'muistiinpano lisätty' })
  //     .redirect('http://localhost:4200/aktiiviset');
  // });
};

exports.createKurssi = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  const kurssi = new Kurssi({
    kurssikoodi: req.body.kurssikoodi,
    nimi: req.body.nimi,
    kuvaus: req.body.kuvaus
  });

  kurssi
    .save()
    .then(result => {
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Note.'
      });
    });
};

exports.findAllKurssi = (req, res) => {
  Kurssi.find()
    .then(notes => {
      res.send(notes);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notes.'
      });
    });
};
