const Tehtava = require('../models/tehtava.model.js');
const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');

// Create and Save a new Note
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  // Create a Note
  const tehtava = new Tehtava({
    tehtava: req.body.tehtava,
    deadline: req.body.deadline,
    kurssi: req.body.kurssi
  });

  // Save Note in the database
  tehtava
    .save()
    .then(data => {
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
