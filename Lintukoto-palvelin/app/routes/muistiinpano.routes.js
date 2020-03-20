module.exports = app => {
  const muistiinpano = require('../controllers/muistiinpano.controller.js');
  const express = require('express');
  const router = express.Router();
  // Create a new Note
  app.post('/notes', muistiinpano.create);

  // Retrieve all Notes
  app.get('/notes', muistiinpano.find);

  // Retrieve a single Note with noteId
  app.get('/notes?kurssi=${kurssi}', muistiinpano.find);

  // Update a Note with noteId
  app.put('/notes/:noteId', muistiinpano.update);

  // Delete a Note with noteId
  app.delete('/notes/:noteId', muistiinpano.delete);

  app.post('/muokkaamp', muistiinpano.muokkaamp);

  app.post('/poistamp', muistiinpano.poistamp);
};
