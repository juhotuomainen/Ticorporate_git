const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kurssi = require('../models/kurssi.model');
const Kayttaja = require('../models/user.model');
const KalenteriMerkinta = require('../models/kalenterimerkinta.model');
const Muistiinpano = require('../models/muistiinpano.model');
const url = require('../../config/database.config');

const mongoose = require('mongoose');

// UUDEN KURSSIN LISÄYS

exports.create = (req, res) => {
  // Tarkistetaan, että requestin mukana tulee body, ja jos ei tule lähetetään virheilmoitus.
  if (!req.body) {
// Palautetaan tilaviesti 400, jos muistiinpanoa ei löydy req-luokan body-ominaisuudesta
    return res.status(400).send({
      message: 'Virhe! Kurssia ei löytynyt.'
    });
  }

  let opintopisteet;
  let tehtavat;
  let kontaktit;
  let user = req.body.tunnus;
  // Etsitään tietokannan 'kurssi' collectionista match, jonka nimi matchaa req.body.nimeen.
  // -> Tallennetaan opintopisteet ja tehtavat ko. muuttujiin
  // -> JOS kurssilla on kontaktitunteja, tehdaan niista kalenterimerkinnat
  // -> Luodaan "aktiivinen" Objecti, josta tehdään uusi aktiivinen kurssi.
  // - >Lopuksi pushataan luotu "aktiivinen" Objekti oikean käyttäjän tietoihin.

  Kurssi.findOne({ nimi: req.body.nimi })
    .then((kurssi) => {
      console.log(kurssi);
      opintopisteet = kurssi.opintopisteet;
      tehtavat = kurssi.tehtavat;
      kontaktit = kurssi.kontaktit;
      if (kurssi.kontaktit !== 'Verkko') {
        for (let tunti of kontaktit) {
          let merkinta = new KalenteriMerkinta({
            Subject: kurssi.nimi,
            Id: Math.random(),
            StartTime: tunti.StartTime,
            EndTime: tunti.EndTime,
            IsAllDay: false,
            Description: kurssi.nimi + ' kontakti tunti',
            user: user
          });
          merkinta.save();
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .then((lol) => {
      console.log(opintopisteet);

      const aktiivinen = new Object({
        kurssikoodi: req.body.kurssikoodi,
        nimi: req.body.nimi,
        kuva: req.body.kuva,
        muistiinpanot: [{}],
        aikataulu: true,
        uudetTehtavat: tehtavat,
        opintopisteet: opintopisteet,
        kontaktit: kontaktit
      });

      Kayttaja.Kayttaja.findOneAndUpdate(
        { tunnus: req.body.tunnus },
        {
          $push: { aktiiviset_kurssit: aktiivinen }
        },
        { upsert: true }
      ).then(res.status(200).redirect('http://localhost:4200/aktiiviset'));
    });

};

// ETSITÄÄN TIETTY KÄYTTÄJÄ JA PALAUTETAAN SEN TIEDOT

exports.findjaupdate = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dataa ei löytynyt'
    });
  }
// Tulostetaan req-metodin body-osan sisältö konsoliin.
  console.log(req.body);

  Kayttaja.Kayttaja.updateOne(
    {
      tunnus: req.body.tunnus,
      'aktiiviset_kurssit.nimi': req.body.kurssi
    },
    { $push: { 'aktiiviset_kurssit.$.muistiinpanot': req.body } }
  )
    .then(res.status(200).redirect('http://localhost:4200/aktiiviset'))
    .catch((err) => {
      console.log(err);
    });
};

// LUODAAN UUSI AKTIIVINEN KURSSI KÄYTTÄJÄLLE. CreateKurssi-olio, jonka parametreina req- ja res-parametrit sisältävä nuolifunktio, joka suorittaa kurssin teon.

exports.createKurssi = (req, res) => {
  // Validoidaan pyyntö
  if (!req.body) {
    return res.status(400).send({
      message: 'Valitse kurssi pudotusvalikosta. Kurssi ei voi olla tyhjä!'
    });
  }
// Luodaan new-avainsanalla uusi kurssi-mallin mukainen kurssi, jolla on kurssikoodi, nimi ja kuvaus. Ne löytyvät req-luokan body-ominaisuudesta, esimerkiksi kuvaus löytyy viittaamalla kohtaan req.body.kuvaus.
  const kurssi = new Kurssi({
    kurssikoodi: req.body.kurssikoodi,
    nimi: req.body.nimi,
    kuvaus: req.body.kuvaus
  });
// Tallennetaan kurssi tietokantaan
  kurssi
    .save()
    .then((result) => {
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
    .catch((err) => {

      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa luotaessa.'
      });
    });
};

// ETSITÄÄN KAIKKI KURSSIT


exports.findAllKurssi = (req, res) => {
// Etsitään kutsumalla find-metodia Kurssi- MongoDB-mallin kautta
  Kurssi.find()
<<<<<<< HEAD
// Ketjutetaan tehtävää eteenpäin pisteen avulla välittämällä find()-metodin tulos then-metodille, joka lähettää muistiinnpanot eteenpäin käyttäen res-luokan send-ominaisuutta, jonka parametrina on notes (muistiinpanot)..
    .then(notes => {
      res.send(notes);
    })

      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa haettaessa.'
      });
    });
};

// SIIRRETÄÄN SUORITETTU KURSSI POIS AKTIIVISET KURSSIT TAULUKOSTA SUORITETUT KURSSIT TAULUKKOON

exports.suoritettu = async (req, res) => {
  const kayttaja = await Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });

  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }

  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);

  const kurssi = await kayttaja.aktiiviset_kurssit[kurssi_index];

  kayttaja.opintopisteet =
    (await kayttaja.opintopisteet) + kurssi.opintopisteet;

  await kayttaja.suoritetut_kurssit.push(kurssi);

  await kayttaja.aktiiviset_kurssit.splice(kurssi_index, 1);

  (await kayttaja)
    .save()
    .then((kayttaja) => {
      res.status(200).json({ message: 'Kurssi suoritettu' });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
