const mongoose = require('mongoose');

const AktiivinenKurssiSchema = mongoose.Schema({
  kurssikoodi: String,
  nimi: String,
  kuva: String,
  muistiinpanot: Array
});

module.exports = mongoose.model('AktiivinenKurssi', AktiivinenKurssiSchema);
