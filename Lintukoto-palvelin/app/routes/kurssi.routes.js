module.exports = app => {
  const kurssi = require('../controllers/aktiivinen_kurssi.controller.js');
  const muistiinpano = require('../controllers/muistiinpano.controller');
  const express = require('express');
  // Luo uusi "aktiivinen kurssi" käyttäjälle
  app.post('/kurssit', kurssi.create);

  // Luo uusi muistiinpano
  app.post('/kurssit/uus', kurssi.findjaupdate);

  // Hae kaikki kurssit
  app.get('/kurssit', kurssi.findAll);

  //app.get('/kurssit?kurssi=${kurssi}', kurssi.find);

  app.get('/lataakurssit', kurssi.findAllKurssi);

  app.post('/uusikurssi', kurssi.createKurssi);
};
