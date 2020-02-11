const mongoose = require('mongoose');

const MuistiinpanoSchema = mongoose.Schema({
  otsikko: String,
  muistiinpano: String,
  kurssi: String
});

module.exports = mongoose.model('Muistiinpano', MuistiinpanoSchema);
