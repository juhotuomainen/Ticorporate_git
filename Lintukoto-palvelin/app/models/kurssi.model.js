const mongoose = require('mongoose');

const KurssiSchema = mongoose.Schema(
  {
    kurssikoodi: String,
    nimi: String,
    kuva: String,
    opintopisteet: Number,
    tehtavat: Array,
    koulutusohjelma: String,
    kontaktit: Array
  },
  { collection: 'kurssi' }
);
module.exports = mongoose.model('kurssi', KurssiSchema);
