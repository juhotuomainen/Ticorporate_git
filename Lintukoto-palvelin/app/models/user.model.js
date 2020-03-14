const mongoose = require('mongoose');
const KurssiSchema = require('../models/kurssi.model');
const MuistinpanoSchema = require('../models/muistiinpano.model');

const MuistiinpanoSchema1 = mongoose.Schema(
  {
    tunnus: String,
    kurssi: String,
    otsikko: String,
    muistiinpano: String
  },
  { collection: 'Muistiinpano1' }
);
mongoose.model('Muistiinpano1', MuistiinpanoSchema1);

const Kurssi2Schema = mongoose.Schema({
  aktiiviset_kurssit: { type: Object },
  suoritetut_kurssit: { type: Object }
});
mongoose.model('kurssit', Kurssi2Schema);

const AktiivisetKurssitSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    kurssikoodi: { type: String },
    nimi: { type: String },
    kuva: { type: String },
    muistiinpanot: [MuistiinpanoSchema1]
  },
  { collection: 'AktiivisetKurssit' }
);
const KayttajaSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    tunnus: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    aktiiviset_kurssit: [AktiivisetKurssitSchema],
    asetukset: { type: Object, required: false }
  },
  { collection: 'kayttaja' }
);

exports.AktiivisetKurssit = mongoose.model(
  'AktiivisetKurssit',
  AktiivisetKurssitSchema
);
exports.Kayttaja = mongoose.model('kayttaja', KayttajaSchema);
