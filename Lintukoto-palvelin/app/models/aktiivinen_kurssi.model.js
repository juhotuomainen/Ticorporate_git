const mongoose = require('mongoose');

const AktiivinenKurssiSchema = mongoose.Schema({
  kurssikoodi: String,
  nimi: String,
  kuva: String,
  muistiinpanot: Array,
  opintopisteet: Number,
  uudetTehtavat: Array,
  tehdytTehtavat: Array,
  kontaktit: Array
});

module.exports = mongoose.model('AktiivinenKurssi', AktiivinenKurssiSchema);
