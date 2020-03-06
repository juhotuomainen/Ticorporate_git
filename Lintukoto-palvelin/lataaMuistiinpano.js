const Muistio = require('./muistiinpanot');
const bodyParser = require('body-parser');

let bpjson = bodyParser.json({ extended: true });
let url = bodyParser.urlencoded({ extended: true });

exports.lataaMuistiinpano = (req, res, next) => {
  console.log('ASDF');
  Muistio.lataa()
    .then(muistiinpanot => {
      console.log(muistiinpanot);
      console.log('Hei vaan!!!');
      res.status(200);
      return muistiinpanot;
    })
    .catch(err => console.log(err));
};
