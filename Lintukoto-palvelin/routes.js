const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const muistiinpano = require('./lisaaMuistiinpano').lisaaMuistiinpano;
const haeMuistiinpano = require('./lataaMuistiinpano').lataaMuistiinpano;

router.post('/muistiinpano', muistiinpano);

router.get('/haeMuistiinpano', haeMuistiinpano);

router.get('/haeMuistiinpanoOtsikko', haeMuistiinpano);

module.exports = router;
