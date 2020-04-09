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

// tästä poistettiin head (vanha koodi)

  // Save Note in the database
  muistiinpano
    .save()
/* Ohjataan tiedot .then-metodille, joka ottaa parametrikseen nuolifunktion. Se lähettää res-luokan status-metodia käyttäen parametrina HTTP-vastauksen 200, mikä tarkoitta hyväksyttyä tulosta. Sen jälkeen then-metodin tulos ketjutetaan * redirect-metodille, joka uudelleenohjaa käyttäjän heittomerkkien sisässä olevalle sivulle eli aktiisivet kurssit -sivulle. */
    .then(data => {
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus virheviesti "Some error occurred while creating the note" suomennettuna. */

    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa luotaessa.'
      });
    });
};

// Retrieve and return all notes from the database.
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Muistiinpano.find()
    .then(notes => {
      res.send(notes);
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus virheviesti "Some error occurred while rethrieving the note" suomennettuna. */

    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa haettaessa.'
      });
    });
};

// Find a single note with a noteId
exports.find = (req, res) => {
// tulostetaan req-luokan body-kohta konsoliin.
  console.log(req.body);
  Muistiinpano.find(req.body)
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus , looginen tai-operaattori (||) ja virheviesti§  "Note not found with ID + muistiinpanon id" suomennettuna. */

    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löytynyt id:llä ' + req.body
        });
      }
// Lähetetään muistiinpanot käyttäen res-luokan send-metodia
      res.send(note);
    })
/* Luodaan catch-lohko, jossa on virheentarkistus. Jos virhe on tyyppiä (kind ===) merkkijonomuotoinen objektiID ("ObjectId), lähetetään res-luokan status-metodia käyttäen HTTP-vastaus 404, joka ohjataan send-metodille, joka * pouolestaan  lähettää err-luokan message-ominaisuuden arvon tai erikseen määritellyn virheviestin.*/
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löytynyt id:llä ' + req.body.kurssi
        });
      }

      return res.status(500).send({
        message: 'Virhe haettaessa muistiinpanoa ID:llä ' + req.body.kurssi
      });
    });
};

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
>>>>>>> d86470b1bf4ea6c8feaea99b2e0e228f66e54c0a

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

<<<<<<< HEAD
  // Find note and update it with the request body
  Muistiinpano.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title || 'Nimetön muistiinpano',
      content: req.body.content
    },
    { new: true }
  )
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löytynyt id:llä ' + req.params.noteId
        });
      }
      res.send(note);
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus , looginen tai-operaattori (||) ja virheviesti§  "Note not found with ID + muistiinpanon id" suomennettuna. */

    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löytynyt id:llä ' + req.params.noteId
        });
      }
      return res.status(500).send({
        message: 'Virhe päivitettäessä muistiinpanoa Id:llä ' + req.params.noteId
      });
    });
};
// Ladataan asioita tietokannasta palvelimelle.
exports.lataa = (req, res) => {
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
};

// Delete a note with the specified noteId in the request
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Muistiinpano.findByIdAndRemove(req.params.noteId)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löytynyt tunnisteella ' + req.params.noteId
        });
      }
      res.send({ message: 'Muistiinpano poistettu onnistuneesti.' });
=======
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
>>>>>>> d86470b1bf4ea6c8feaea99b2e0e228f66e54c0a
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* * metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus , looginen tai-operaattori (||) ja virheviesti§  "Note not found with ID + muistiinpanon id" suomennettuna. */

    .catch(err => {
<<<<<<< HEAD
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löydetty tunnisteella ' + req.params.noteId
        });
      }
      return res.status(500).send({
        message: 'Ei voitu poistaa muistiinpnanoa ID:llä ' + req.params.noteId
      });

    });

  res.status(200).redirect('http://localhost:4200/aktiiviset');
};
