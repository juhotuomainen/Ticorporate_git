const mongoose = require('mongoose');

const MuistiinpanoSchema = mongoose.Schema(
  {
    tunnus: String,
    kurssi: String,
    otsikko: String,
    muistiinpano: String
  },
  { collection: 'Muistiinpano' }
);

module.exports = mongoose.model('Muistiinpano', MuistiinpanoSchema);
