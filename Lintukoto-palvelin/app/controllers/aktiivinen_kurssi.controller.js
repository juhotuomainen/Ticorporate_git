const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kurssi = require('../models/kurssi.model');
const Kayttaja = require('../models/user.model');
const Muistiinpano = require('../models/muistiinpano.model');
const url = require('../../config/database.config');

const mongoose = require('mongoose');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
// Palautetaan tilaviesti 400, jos muistiinpanoa ei löydy req-luokan body-ominaisuudesta
    return res.status(400).send({
      message: 'Muistiinpanon sisältö ei saa olla tyhjä.'
    });
  }
  const aktiivinen = new Object({
    kurssikoodi: req.body.kurssikoodi,
    nimi: req.body.nimi,
    kuva: req.body.kuva,
    muistiinpanot: req.body.muistiinpanot
  });
/* Kommentoitu koodin osuus, jota ei ilmeisesti tarvita, mutta se on hyödyllinen kehitysprosessin kuvauksen kannalta. Siinä luodaan uusi opiskelija samaan tapaan kuin  aktiivinenKurssi-luokan sijaan  Object-luokasta. */
  // const aktiivinen = new AktiivinenKurssi({
  //   kurssikoodi: req.body.kurssikoodi,
  //   nimi: req.body.nimi,
  //   kuva: req.body.kuva,
  //   muistiinpanot: req.body.muistiinpanot
  // });
  // const useri = Kayttaja.findOne({ tunnus: req.body.tunnus });
  // console.log(useri.nimi + 'Testaushommia 666 !!!!!!!!!!');
  // useri.kurssit.update(aktiivinen);

  Kayttaja.Kayttaja.findOneAndUpdate(
    { tunnus: req.body.tunnus },
    {
      $push: { aktiiviset_kurssit: aktiivinen }
    },
    { upsert: true }
/* Suljetaan upsert-olio, joka on Kayttaja-luokan kayttaja-metodin findOneAndUpdate parametrina, joten kirjoitetaan loppusulku. Sitten viesti ohjataan then-metodille, jossa lähetetään parametrina annettava HTTP 200-vastaus ja se ohjataan res-luokan status-metodille, jonka parametrina slkeissa on siis pyyntö 200 (numero 200). Tämä puolestaan ketjutetaan redirect-metodille, jonka suluissa oleva parametri on merkkijonomuotoinen (heittomerkkien sisään kirjoitettu) uudelleenohjausosoite. Koko helahoito on Kayttaja-kokoelman (collection) kayttaja-mallin findOneAndUpdate parametrina.*/
  ).then(res.status(200).redirect('http://localhost:4200/aktiiviset'));

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
// Tulostetaan käyttäjätunnus konsoliin.
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
  //       message: err.message || 'Jokin virhe tapahtui muistiinpanoa haettaessa.'
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
          message: 'Muistiinpanoa ei löytynyt id:llää ' + req.body.kurssikoodi
        });
      }
      return res.status(500).send({
        message: 'Virhe haettaessa muistiinpanoa id:llä ' + req.body.kurssikoodi
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
    console.log('lol. Virhe tapahtui.');
/* Kutsutan mp-luokan muistiinpanot-ominaisuutta ja annetaan $push-avainsana. Parametriksi annetaan muistiinpanoObject -objekti. */
    mp.muistiinpanot.$push(muistiinpanoObject);
// Tallennetaan muistiinpano hyödyntäen Mongoose-kirjaston save-metodia ilman parametrejä. 
    mp.save();
  })
// Lähetetään merkkijonomuotoinen viesti ok
    .then(res.send('ok'))
// Catch-lohko, joka sieppaa virheen.
    .catch(err => {
/* Kutsutaan res-luokan status-metodia, joka lähettää parametrina annetuun koodin 500 edelleen siihen ketjutettuun send-metodiin, jonka parametrina olevassa oliossa on message-avain ja arvona err-luokan message-ominaisuus tai "Some * error occurred while rethrieving a note". */
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa haettaessa.'
      });
    });
};

exports.findjaupdate = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dataa ei löytynyt'
    });
  }
// Tulostetaan req-metodin body-osan sisältö konsoliin.
  console.log(req.body);

  // const user =  Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });
  Kayttaja.Kayttaja.updateOne(
    { tunnus: req.body.tunnus, 'aktiiviset_kurssit.nimi': req.body.kurssi },
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
// CreateKurssi-olio, jonka parametreina req- ja res-parametrit vastaanottava nuolifunktio, joka suorittaa kurssin teon..
exports.createKurssi = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
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
// Yksinkertainen moduuli, jossa oleva nuolifunktio etsii kaikki kurssit.
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
