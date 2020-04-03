module.exports = app => {
  const muistiinpano = require('../controllers/muistiinpano.controller.js');
  const express = require('express');
  const router = express.Router();

  // Muistiinpanon muokkaus

  app.post('/muokkaamp', muistiinpano.muokkaamp);

  //Muistiinpanon poisto

  app.post('/poistamp', muistiinpano.poistamp);
};
