// tehtävä ja aktiivinen kurssi käyttöön
const Tehtava = require('../models/tehtava.model.js');
const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');

// Create and Save a new Note
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  // Create a Note
  const tehtava = new Tehtava({
    tehtava: req.body.tehtava,
    deadline: req.body.deadline,
    kurssi: req.body.kurssi
  });

  // Save Note in the database
  tehtava
    .save()
// Then-lohko, jonka parametrina virheen käsittelevä nuolifunktio
    .then(data => {
// Uudelleenohjaus .redirect-metodin avulla aktiiviset-kurssit -sivulle
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
/* Otetaan virhe kiinni catch-lohkossa, johon lähetetään res (response) -luokan vastauksena oleva parametri 500 (virhe) seuraavana ketjussa olevalle send-metodille, jonka parametrina olevassa oliossa lähetetään vastauksena eerr-luokan * message-ominaisuuden sisältävä virheviesti tai suomenkielinen virheilmoitus. */
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa luotaessa.'
      });
    });
};
// Kurssien päivitysmetodi findjaupdate, joka päivittää opiskelijan kurssin. Parametreina req ja res.
exports.findjaupdate = (req, res) => {
/* Jos pyyntö ei ole oikeassa muodossa, siirrytään tähän lohkoon. Siinä lähetetään res-luokan status-metodia käyttäen virhekoodi 500 seuraavana parametrina olevalle send-oliolle, jonka sisällä olevassa oliossa tulostetaan käyttäjälle * virheilmoitus (joko err-luokan message-ominaisudessa oleva tai itse määritelty virheilmoitus). */
  if (!req.body) {
    return res.status(400).send({
      message: 'Dataa ei löytynyt'
    });
  }
// lähetetään JSON-muodossa oleva kysely (query), jossa halutaan selvittää kurssi (löytyy req-luokan body-ominaisuudesta).
  query = { nimi: req.body.kurssi };
  console.log(query);
/* Päivitetään aktiivinen kurssi kutsumalla findOneAndUpdate-metodia AktiivinenKurssi-kkonstruktorin kautta,. Sen parametreina on kaksi avain-arvo -parametria sisältävää oliota. Ensimmäiseen tulee Mongoose-kirjaston $push-metodia * käyttäen uudet tehtävät (uudetTehtavat- avain) req-luokan body-ominaisuuteen. Toisen parametrina on booleanarvon new-avain, jonka arvo true kertoo, että kyse on uudesta dokumenttiin lisättävästä asiasta. */
  AktiivinenKurssi.findOneAndUpdate(
    query,
    {
      $push: { uudetTehtavat: req.body }
    },
    { new: true })
/* Otetaan virhe kiinni catch-lohkossa, johon lähetetään res (response) -luokan vastauksena oleva parametri 500 (virhe) seuraavana ketjussa olevalle send-metodille, jonka parametrina olevassa oliossa lähetetään vastauksena eerr-luokan * message-ominaisuuden sisältävä virheviesti tai suomenkielinen virheilmoitus. */
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Jokin virhe tapahtui muistiinpanoa luotaessa.'
      })
    })
/* Ohjataan Then-metodilla kyselyn (query) tulos eteenpäin antamalla then-metodin parametriksi res-luokan redirect-metodia, jolle annetaan parametriksi heittomerkkien sisässä parametrina osoite, johon käyyttäjä ohjataan. Esimerkissä * tämä on isäntäkoneen porttia 4200 hyödyntävä osoite http://localhost:4200/aktiiviset.*/
.then(res.redirect('http://localhost:4200/aktiiviset'));
};
