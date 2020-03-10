const mongoose = require('mongoose');

const KurssiSchema = mongoose.Schema(
  {
    kurssikoodi: String,
    nimi: String,
    kuva: String,
    muistiinpanot: Array,
    tehdytTehtavat: Array,
    uudetTehtavat: Array
  },
  { collection: 'kurssi' }
);
module.exports = KurssiSchema;
module.exports = mongoose.model('kurssi', KurssiSchema);
