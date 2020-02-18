const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kurssi = require('../models/kurssi.model');
const mongoose = require('mongoose');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  const aktiivinen = new AktiivinenKurssi({
    kurssikoodi: req.body.kurssikoodi,
    nimi: req.body.nimi,
    kuva: req.body.kuva,
    muistiinpanot: req.body.muistiinpanot
  });

  aktiivinen
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

exports.findAll = (req, res) => {
  AktiivinenKurssi.find()
    .then(notes => {
      res.send(notes);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notes.'
      });
    });
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
  query = { nimi: req.body.nimi };
  console.log(query);
  AktiivinenKurssi.findOneAndUpdate(
    query,
    {
      $push: { muistiinpanot: req.body }
    },
    { new: true }
    // ,(err, muistiinpano) => {
    //   if (err) {
    //     return res
    //       .status(404)
    //       .send('Muistiinpanon lisäämisessä tapahtui virhe!');
    //   }
    //   console.log(muistiinpano);
    //   res.send(muistiinpano);
    // }
  ).then(res.redirect('http://localhost:4200/aktiiviset'));
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
