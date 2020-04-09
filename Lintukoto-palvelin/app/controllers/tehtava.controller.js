// tehtävä ja aktiivinen kurssi käyttöön
const Tehtava = require('../models/tehtava.model.js');
const AktiivinenKurssi = require('../models/aktiivinen_kurssi.model');
const Kayttaja = require('../models/user.model');

// LUODAAN JA TALLENNETAAN KURSSILLE UUSI TEHTÄVÄ

exports.create = async (req, res) => {
  // Tarkistetaan pyyntö
  if (!req.body) {
    return res.status(400).send({
      message: 'Täytä vaaditut kentät lisätäksesi uuden tehtävän.',
    });
  }

  if (!req.body.deadline) {
    return res.status(400).send({
      message: 'Täytä deadline kohtaan päivämäärä ja kellonaika!',
    });
  }

  // Haetaan kannasta käyttäjä ja tallennetaan se "kayttaja" muuttujaan

  const kayttaja = await Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });

  // Luodaan tehtävä Objekti
  const tehtava = new Object({
    tehtava: req.body.tehtava,
    deadline: new Date(req.body.deadline),
    kurssi: req.body.kurssi,
  });

  // Funktio, jolla haetaan oikea kurssi (etsitään kannasta kurssi, jonka nimi
  // vastaa pyynnön mukana tullutta kurssia)

  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }

  // Haetaan oikean kurssin index taulukossa ja tallennetaan se kurssi:index muuttujaan

  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);

  // Lisätään tehtava Objekti kantaan uudetTehtavat taulukkoon

  await kayttaja.aktiiviset_kurssit[kurssi_index].uudetTehtavat.push(tehtava);

  // Lopuksi tallennetaan kayttaja muuttuja tietokantaan
  kayttaja
    .save()
    .then((data) => {
      console.log(data);
      res.status(200).redirect('http://localhost:4200/aktiiviset');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Virhe! Jokin meni pieleen tehtävää luotaessa.',
      });
    });
};

exports.valmis = async (req, res) => {
  const kayttaja = await Kayttaja.Kayttaja.findOne({ tunnus: req.body.tunnus });

  const tehtava = new Object({
    tehtava: req.body.tehtava,
    deadline: null,
    kurssi: req.body.kurssi,
    valmis: true,
  });

  function checkName(value) {
    if (value.nimi == req.body.kurssi) {
      return true;
    }
    return false;
  }

  function checkteht(value) {
    if (value.tehtava == req.body.tehtava) {
      return true;
    }
    return false;
  }

  const kurssi_index = await kayttaja.aktiiviset_kurssit.findIndex(checkName);
  console.log(kurssi_index);

  await kayttaja.aktiiviset_kurssit[kurssi_index].tehdytTehtavat.push(tehtava);

  const tehtava_index = await kayttaja.aktiiviset_kurssit[
    kurssi_index
  ].uudetTehtavat.findIndex(checkteht);

  await kayttaja.aktiiviset_kurssit[kurssi_index].uudetTehtavat.splice(
    tehtava_index,
    1
  );

  kayttaja
    .save()
    .then((kayttaja) => {
      res.status(200).json({ message: 'tehtava tehty' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Virhe! Jokin meni pieleen tehtävää luotaessa.',
      });
    });

};
