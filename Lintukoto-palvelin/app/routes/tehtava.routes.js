module.exports = app => {
  const kurssi = require('../controllers/aktiivinen_kurssi.controller.js');
  const tehtava = require('../controllers/tehtava.controller');
  // Lisätään uusi tehtävä
  app.post('/tehtavanLisays', tehtava.create);
};
