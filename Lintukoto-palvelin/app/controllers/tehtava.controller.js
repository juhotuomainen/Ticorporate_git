const Tehtava = require('../models/tehtava.model.js');
const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kayttaja = require('../models/user.model');

// Create and Save a new Note
// Create and Save a new Note
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  console.log(req.body);

  const kayttaja = await Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });

  console.log(kayttaja.tunnus);

  // Create a Note
  const tehtava = new Object({
    tehtava: req.body.tehtava,
    deadline: req.body.deadline,
    kurssi: req.body.kurssi
  });

  console.log(tehtava);

  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }

  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);

  await kayttaja.aktiiviset_kurssit[kurssi_index].uudetTehtavat.push(tehtava);

  console.log('kurssin index -> ' + kurssi_index);

  // Save Note in the database
  kayttaja
    .save()
    .then(data => {
      console.log(data);
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
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
  query = { nimi: req.body.kurssi };
  console.log(query);
  AktiivinenKurssi.findOneAndUpdate(
    query,
    {
      $push: { uudetTehtavat: req.body }
    },
    { new: true }
  ).then(res.redirect('http://localhost:4200/aktiiviset'));
};
