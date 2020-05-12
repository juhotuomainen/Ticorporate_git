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
    .then(kurssi => {
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
    .catch(err => {
      console.log(err);
    })
    .then(lol => {
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

exports.findAll = (req, res) => {
  Kayttaja.Kayttaja.findOne({ tunnus: req.query.tunnus }).then(result => {
    res.send(result);
  });
};

// ETSITÄÄN KÄYTTÄJÄ JA LISÄTÄÄN TÄLLE UUSI MUISTIINPANO

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
    .catch(err => {
      console.log(err);
    });
};
<<<<<<< HEAD
// CreateKurssi-olio, jonka parametreina req- ja res-parametrit vastaanottava nuolifunktio, joka suorittaa kurssin teon..
=======

// LUODAAN UUSI AKTIIVNEN KURSSI KÄYTTÄJÄLLE

>>>>>>> 1275495c7db032a5bb7a9914faaaa8da8a969f42
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
/* Ketjutetaan kurssikoodin luomiseen then-nuolifunktio, joka lähettää parametrina olevan HTTP 200-vastauksen asiakasohjelmalle. Se puolestaan ohjaa viestin redirect-metodille, jolle annetaan suluissa ja heittomerkeissä uudelleenohjausosoite (esimerkkikoodissa http://localhost:4200/).*/
    .then(result => {
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* * metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus virheviesti "Some error occurred while cleating the note". */
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa luotaessa.'
      });
    });
};
<<<<<<< HEAD
// Yksinkertainen moduuli, jossa oleva nuolifunktio etsii kaikki kurssit.
=======

// ETSITÄÄN KAIKKI KURSSIT

>>>>>>> 1275495c7db032a5bb7a9914faaaa8da8a969f42
exports.findAllKurssi = (req, res) => {
// Etsitään kutsumalla find-metodia Kurssi- MongoDB-mallin kautta
  Kurssi.find()
// Ketjutetaan tehtävää eteenpäin pisteen avulla välittämällä find()-metodin tulos then-metodille, joka lähettää muistiinnpanot eteenpäin käyttäen res-luokan send-ominaisuutta, jonka parametrina on notes (muistiinpanot)..
    .then(notes => {
      res.send(notes);
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* * metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus virheviesti "Some error occurred while rethrieving the note". Eli suomennettuna: "Jokin virhe tapahtui muistiinpanoja haettaessa."*/

    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa haettaessa.'
      });
    });
};
