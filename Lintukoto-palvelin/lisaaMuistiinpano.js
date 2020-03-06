const Muistio = require('./muistiinpanot');
const bodyParser = require('body-parser');

let bpjson = bodyParser.json({ extended: true });
let url = bodyParser.urlencoded({ extended: true });

exports.lisaaMuistiinpano = (req, res, next) => {
  const otsikko = req.body.otsikko;
  const kurssi = req.body.kurssi;
  const muistiinpano = req.body.muistiinpano;
  const _muistiinpano = new Muistio(otsikko, kurssi, muistiinpano);
  _muistiinpano
    .tallenna()
    .then(result => {
      console.log(result);
      res.redirect('http://localhost:4200/aktiiviset');
    })
    .catch(err => console.log(err));
};
