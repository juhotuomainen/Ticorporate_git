// Tehdään express-sovellus. Se käynnistyy tästä tästä tiedostosta.
// Express käyttöön require-määreellä (kirjaston mimi suluissa heittomerkkien sisällä parametrina), tieto express-vakiomuuttujassa (const).
const express = require('express');
// sovelluksen luontirivi. Kutsutaan express.metodia yhtäsuuruusmerkin oikealla puolella ja tieto tallennetaan yhtäsuuruusmerkin vasemmalla puolella olevaan app-muuttujaan.
const app = express();
// Body-parser-kirjasto käyttöön require-määreellä (kirjaston mimi suluissa heittomerkkien sisällä parametrina), tieto bodyParser-vakiomuuttujassa (const).
const bodyParser = require('body-parser');
// liitetaan tiedosto studentroute osaksi päätiedostoa
// const studentroute = require('./app/routes/studentroute.js')(app);

/** Pätki sisältö, jonka tyyppi on urlencoded ("content-type - application/x-www-form-urlencoded). App-luokan use-metodin parametrina on bodyParser-luokan urlencoded-metodin kutsu, jonka parametrina on objekti. Sillä on kaksi asiaa: * * avain extended ja arvo true.*/
app.use(bodyParser.urlencoded({extended: true}));
// Pätki sisältö, jonka tyyppi on application/json (sovellus/json-data) ("content-type - application/json"). App.use-metodin parametrina suluissa bodyParser-muuttujan kautta kutsuttavan json-metodin kutsu, jolla ei ole parametreja. 
app.use(bodyParser.json());

// Otetaan tiedostoja kayttoon
// ensiksi konfiguraatio, joka luotiin database.config.js-tiedostoon. Tieto siitä tallennetaan dbConfig-muuttujaan.
const dbConfig =require('./config/database.config.js');
// mongoose-kirjasto kayttoon. Tieto mongoose-muuttujassa.
const mongoose = require('mongoose');
// tehdaan promise mongooselle ja dsijoitetaan se globaaliin Promise-metodiin.
mongoose.Promise = global.Promise;
// yhdistetaan tietokantaan mongoose.connect-metodilla. jolle annetaan parametriksi dbConfig-muuttujan kautta ktusuttava url-metodi (eli viitataan siis configuraation url-avaimeen)
mongoose.connect(dbConfig.url, { 
// kaytetaan uutta UrlParseria.
useNewUrlParser: true,
// Kaytetaan yhdistettya topologiaa (Unified topology). En tieda, mita se tarkoittaa.
useUnifiedTopology: true
})
// ketjutetaan asken tehdyt asiat (eli yhdistaminen) ketjutetaan then-metodille, jossa on onnistuneen yhteydenottoilmoituksen tulostava anonyymi nuolifunktio. Funktiolla ei ole siis nimeä eikä parametreja.

.then (() => {
// TUlostetaan viesti konsoliin.
console.log('Yhdistettiin onnistuneesti tietokantaan!');
})
// Ketjutus eteenpain .catch-lohkolle, joka ottaa vastaan virheen. Siina tulostetaan virheviesti virheineen konsoliin. Parametrina err-muuttuja
.catch ((err) => 
{
console.log('Ei voitu yhdistää tietokantaan. Syynä ' + err);
// Lopetetaan prosessi process.exit-metodilla
process.exit();
});
/** Maaritellaan yksinkertainen reitti. Ensin kutsutaan router.get-metodia, jonka ensimmaiseksi parametriksi heittomerkeissa kirjoitetaan kauttaviiva ja sitten callback-funktio, joka otaa parametriksi pyynnon ja vastauksen (parametrimuuuttujat req ja res) ja valittaa res-luokan json-metodille json-datamuodossa viestin, joka tulostetaan ilmeisesti sovelluksen kaynnistyessa.*/
app.get('/', (req, res) => {
res.json({"message": "Tervetuloa RestAPI-harjoitussovellukseen!"});
});
/** Määritellään reitti get-metodilla (perusreitti). Parametreina juuripolku ('/') ja nuolifunktio, joka tulostaa tervetuloilmoituksen. Sen parametreina pyyntö (req) ja vastaus (res), joten viesti tulostetaan objektimuodossa res-parametrin kautta * siten, että viesti-objektin arvon viesti (lainausmerkeissä eli JSON-dataa) arvo on lyhyt tervetuloviesti. Nuolifunktio on siis callback-funktio.*/
app.get('/', (req, res) => {
res.json({"message": "Tervetuloa lintukoto-sovellukseen!"});
});

// Kuunnellaan porttia 3000. App-muuttujan kautta (express-metoedi) kutsutaan listen-metodia, jonka parametreina portin numero (number-tyyppi) ja nuolifunktio, joka tulostaa viestin yhteyden tilasta konsoliin.
app.listen(3000, () => {
// tulostus konsoliin
console.log('Palvelin käynnissä portissa 3000.');
});
}