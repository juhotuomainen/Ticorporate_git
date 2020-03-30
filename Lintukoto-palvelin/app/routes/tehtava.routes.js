module.exports = app => {
  const kurssi = require('../controllers/aktiivinen_kurssi.controller.js');
  const tehtava = require('../controllers/tehtava.controller');
  // Create a new Note
  //app.post('/tehtavat', tehtava.create);
  app.post('/tehtavat', tehtava.findjaupdate);
  app.post('/tehtavanLisays', tehtava.create);
};
