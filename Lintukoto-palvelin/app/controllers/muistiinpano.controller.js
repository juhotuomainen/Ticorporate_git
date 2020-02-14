const Muistiinpano = require('../models/muistiinpano.model.js');

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
  const muistiinpano = new Muistiinpano({
    otsikko: req.body.otsikko || 'Ei otsikkoa',
    muistiinpano: req.body.muistiinpano,
    kurssi: req.body.kurssi
  });

  // Save Note in the database
  muistiinpano
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

// Retrieve and return all notes from the database.
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Muistiinpano.find()
    .then(notes => {
      res.send(notes);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notes.'
      });
    });
};

// Find a single note with a noteId
exports.find = (req, res) => {
  console.log(req.body);
  Muistiinpano.find(req.body)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.body
        });
      }
      res.send(note);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.body.kurssi
        });
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.body.kurssi
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
      title: req.body.title || 'Untitled Note',
      content: req.body.content
    },
    { new: true }
  )
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        });
      }
      res.send(note);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        });
      }
      return res.status(500).send({
        message: 'Error updating note with id ' + req.params.noteId
      });
    });
};

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
          message: 'Note not found with id ' + req.params.noteId
        });
      }
      res.send({ message: 'Note deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        });
      }
      return res.status(500).send({
        message: 'Could not delete note with id ' + req.params.noteId
      });
    });
};
