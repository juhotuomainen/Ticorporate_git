const Muistiinpano = require('../models/muistiinpano.model.js');
const Kayttaja = require('../models/user.model');
const mongoose = require('mongoose');

// MUOKATAAN MUISTIINPANOA

exports.muokkaamp = async (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  const kayttaja = await Kayttaja.Kayttaja.findOne({
    tunnus: req.body.tunnus
  });

  console.log(kayttaja);
  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }
  function checkNote(value) {
    if (value.otsikko == req.body.otsikko) {
      return true;
    }
    return false;
  }

  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);
  const muistiinpano_index = await kayttaja.aktiiviset_kurssit[
    kurssi_index
  ].muistiinpanot.findIndex(checkNote);

  const id = await kayttaja.aktiiviset_kurssit[kurssi_index].muistiinpanot[
    muistiinpano_index
  ]._id;

  const mupa = new Muistiinpano({
    _id: id,
    otsikko: req.body.otsikkoUusi,
    tunnus: req.body.tunnus,
    muistiinpano: req.body.muistiinpano,
    kurssi: req.body.kurssi
  });

  kayttaja.aktiiviset_kurssit[kurssi_index].muistiinpanot[
    muistiinpano_index
  ] = mupa;
  console.log(id);
  const id2 = mongoose.Types.ObjectId(id);
  console.log(mongoose.Types.ObjectId(id));

  await kayttaja.save().then(mp => {
    console.log(mp);
  });

  res.status(200).redirect('http://localhost:4200/aktiiviset');
};

// POISTETAAN MUISTIIPANO

exports.poistamp = async (req, res) => {
  console.log(req.body);

  const kayttaja = await Kayttaja.Kayttaja.findOne({
    tunnus: req.body.tunnus
  });

  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }
  function checkNote(value) {
    if (value.otsikko == req.body.otsikko) {
      return true;
    }
    return false;
  }
  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);
  const muistiinpano_index = await kayttaja.aktiiviset_kurssit[
    kurssi_index
  ].muistiinpanot.findIndex(checkNote);

  const id = await kayttaja.aktiiviset_kurssit[kurssi_index].muistiinpanot[
    muistiinpano_index
  ]._id;

  await kayttaja.aktiiviset_kurssit[kurssi_index].muistiinpanot.splice(
    muistiinpano_index,
    1
  );

  await kayttaja
    .save()
    .then(mp => {
      console.log(mp.aktiiviset_kurssit[2].muistiinpanot);
    })
    .catch(err => {
      console.log(err);
    });

  res.status(200).redirect('http://localhost:4200/aktiiviset');
};
