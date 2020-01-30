// Tehdään express-sovellus. Se käynnistyy tästä tästä tiedostosta.

// Express käyttöön require-määreellä (kirjaston mimi suluissa heittomerkkien sisällä parametrina), tieto express-vakiomuuttujassa (const).
const express = require('express');
// Body-parser-kirjasto käyttöön require-määreellä (kirjaston mimi suluissa heittomerkkien sisällä parametrina), tieto bodyParser-vakiomuuttujassa (const).
const bodyParser = require('body-parser');
// sovelluksen luontirivi. Kutsutaan express.metodia yhtäsuuruusmerkin oikealla puolella ja tieto tallennetaan yhtäsuuruusmerkin vasemmalla puolella olevaan app-muuttujaan.
const app = express();
/** Pätki sisältö, jonka tyyppi on urlencoded ("content-type - application/x-www-form-urlencoded). App-luokan use-metodin parametrina on bodyParser-luokan urlencoded-metodin kutsu, jonka parametrina on objekti. Sillä on kaksi asiaa: * avain extended ja arvo true.*/
app.use(bodyParser.urlencoded({extended: true}));
/* Pätki sisältö, jonka tyyppi on application/json (sovellus/json-data) ("content-type - application/json"). App.use-metodin parametrina suluissa bodyParser-muuttujan kautta kutsuttavan json-metodin kutsu, jolla ei ole parametreja. */
app.use(bodyParser.json());
/** Määritellään reitti get-metodilla (perusreitti). Parametreina juuripolku ('/') ja nuolifunktio, joka tulostaa tervetuloilmoituksen. Sen parametreina pyyntö (req) ja vastaus (res), joten viesti tulostetaan objektimuodossa res-parametrin kautta * siten, että viesti-objektin arvon viesti (lainausmerkeissä eli JSON-dataa) arvo on lyhyt tervetuloviesti. Nuolifunktio on siis callback-funktio.*/
app.get('/', (req, res) => {
res.json({"message": "Tervetuloa lintukoto-sovellukseen!"});
});
// Kuunnellaan porttia 3000. App-muuttujan kautta (express-metoedi) kutsutaan listen-metodia, jonka parametreina portin numero (number-tyyppi) ja nuolifunktio, joka tulostaa viestin yhteyden tilasta konsoliin.
app.listen(3000, () => {
// tulostus konsoliin
console.log('Palvelin käynnissä portissa 3000.');
});
