const Muistiinpano = require('../models/muistiinpano.model.js');

// Create and Save a new Note
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Muistiinpanon sisältö ei saa olla tyhjä.'
    });
  }

  // Create a Note
  const muistiinpano = new Muistiinpano({
    otsikko: req.body.otsikko || 'Ei otsikkoa',
    muistiinpano: req.body.muistiinpano,
    kurssi: req.body.kurssi
  });

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

// Update a note identified by the noteId in the request
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

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
    })
/* catch-lohko, jossa oleva nuolifunktio ottaa virheen vastaan parametrina, lähettää res-luokkaa status-ominaisuutta käyttäen status-omminaisuuden parametrina olevan HTTP 500-vastauksen eteenpäin ketjussa seuraavana olevalle send-* * metodille, jonka olion message-avaimen arvona on err-luokan message-ominaisuus , looginen tai-operaattori (||) ja virheviesti§  "Note not found with ID + muistiinpanon id" suomennettuna. */

    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Muistiinpanoa ei löydetty tunnisteella ' + req.params.noteId
        });
      }
      return res.status(500).send({
        message: 'Ei voitu poistaa muistiinpnanoa ID:llä ' + req.params.noteId
      });
    });
};
