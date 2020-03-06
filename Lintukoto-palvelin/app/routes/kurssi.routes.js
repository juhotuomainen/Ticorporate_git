module.exports = app => {
  const kurssi = require('../controllers/aktiivinen_kurssi.controller.js');
  const muistiinpano = require('../controllers/muistiinpano.controller');
  const express = require('express');
  // Create a new Note
  app.post('/kurssit', kurssi.create);

  app.post('/kurssit/uus', kurssi.findjaupdate);

  // Retrieve all Notes
  app.get('/kurssit', kurssi.findAll);

  app.get('/kurssit?kurssi=${kurssi}', kurssi.find);

  app.get('/lataakurssit', kurssi.findAllKurssi);

  app.post('/uusikurssi', kurssi.createKurssi);
};

//   app.get('/aktiiviset_kurssit', aktiivisetKurssit.findAll);

//   // Retrieve a single Note with noteId
//   app.get('/notes?kurssi=${kurssi}', muistiinpano.find);

//   // Update a Note with noteId
//   app.put('/notes/:noteId', muistiinpano.update);

//   // Delete a Note with noteId
//   app.delete('/notes/:noteId', muistiinpano.delete);
// };
