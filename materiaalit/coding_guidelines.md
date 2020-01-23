# Code guidelines
- [Johdanto](#Johdanto)
- [Nimeämiskäytänteet](#Nimeämiskäytänteet)
    - [Muuttujat](#Muuttujat)
    - [Metodit](#Metodit)
    - [Css](#Css)
    - [Routet](#Routet)
    - [Controllerit](#Controllerit)
    - [Luokat](#Luokat)
      - [TypeScript luokan järjestys](#TypeScript-luokan-järjestys)
    - [Isot ja pienet kirjaimet](#Isot-ja-pienet-kirjaimet)
    - [Suojausmääret](#Suojausmääret)
- [Whitespacen käyttö](#Whitespacen-käyttö)
- [Kommentointikäytänteet](#Kommentointikäytänteet)

## Johdanto
Tämä dokumentti on ohjenuora projektissa kirjoitettavasta koodista.

## Nimeämiskäytänteet
Jotta kaikki pysyvät kärryillä siitä mitä muut ovat kirjoittaneet, on tärkeää nimetä muuttujat, metodit, luokat jne. niitä parhaiten kuvaavalla nimellä, englanniksi.

### Muuttujat
Muuttujan nimen tulee kuvata sen sisältämää tietoa. Muuttujan nimi kirjoitetaan englanniksi. Alaviivan käyttö on kiellettyä. Lähtökohtaisesti muuttujan tyyppinä on const, ellei muuttujan arvoa tulla ajonaikana uudelleen päivittämään. Muuttujatyyppiä **VAR** ei käytetä.

TypeScript-muuttujaan tulee aina määrittää tyyppi sekä suojausmääre. Alaviivaa käytetään vain kun muuttujan tyyppi on private. Private-muuttujan eteen lisätään alaviiva. Jos muuttujalle annetaan arvo sitä luotaessa, sille ei tarvitse erikseen määrittää tietotyyppiä. Kun muuttujan tyyppi on taulukko se määritetään seuraavalla tavalla  `number[]` , eikä näin  `Array<number>` .

Esimerkiksi, jos meillä on käyttäjänimi muuttuja:

```javascript
// Väärä tapa. Muuttujassa on alaviiva.
const user_name;
// Oikea tapa. Nimi on kuvaava.
const userName;  
// Väärä tapa. Nimi ei ole kuvaava.
const usrn;
```
```typescript
 // Väärä tapa. Muuttujaan ei ole asetettu tyyppiä.
public userName;
// Oikea tapa. Muuttajan suojausmääre ja tyyppi on määritetty. Muuttuja on private, joten siihen on lisätty alaviiva.
private _userName: string;
// Väärä tapa. Muuttajalle on määritetty tietotyyppi, vaikka muuttujassa on arvo.
public userName: string = 'Masa';
```

### Metodit
Metodin nimen tulee kuvata sen mekanismia. Metodin nimi kirjoitetaan englanniksi. Alaviivan käyttö on kiellettyä. TypeScriptin metodeissa tulee olla palautusarvo. TypeScript-metodiin tulee asettaa oikea suojausmääre (public tai private). Tavallisissa funktioissa ei käytetä lambda-notaatiota.

```javascript
// Väärä tapa. Funktion nimessä on alaviiva.
function return_number() {
    return 5;
}

// Oikea tapa. Funktion nimi on kuvaava
function returnNumber() {
    return 5;
}

// Väärä tapa. Nimi ei ole kuvaava ja se sisältää lambda-notaation tavallisessa metodissa.
const rtnnum = () => {
    return 5;
}
```
```typescript
class Luokka {

    // Väärä tapa. Metodille ei ole asetettu suojausmäärettä.
    returnNumber(): number {
        return 5;
    }

    // Oikea tapa. Metodille on määritetty palautustyyppi, sekä sille on asetettu suojausmääre.
    public returnNumber(): number {
        return 5;
    }

    // Väärä tapa. Metodille ei ole määritetty palautustyyppiä.
    public returnNumber() {
        return 5;
    }

}
```

### Css

Css-tiedostoissa nimet kirjoitetaan pienellä kirjaimilla sekä viivalla erotettuna (ei camelCase!). Jaa css-osiot toisistaan 2 välillä (samaan osioon liittyviin asioihin ei tarvitse väliä).
```css
/* Väärä tapa. Elementin nimi on kirjoitettu camelCasella. */
commentArea { background-color: 'black'; }
/* Oikea tapa. Elementin nimi on kirjoitettu viivalla erotettuna. */
comment-area { background-color: 'black'; }
```

Css-elementteihin olisi hyvä myös kirjoittaa pieni dokumentointi, joka selittää mitä osioita kyseinen teema muokkaa.

### Luokat
Luokan nimen tulee alkaa isolla alkukirjaimella. Luokan nimi kirjoitetaan englanniksi. Alaviivan käyttö on kiellettyä. Luokan muuttujat tulevat ensimmäisenä. Tämän jälkeen jätetään 2 väliä ja tuodaan sekä ```constructor``` sekä ```ngOnInit```. Lopuksi jätetään taas kaksi väliä ja luodaan funktiot. Jokaisen funktion välissä on 2 väliä. Luokan sisältävän tiedon järjestys on:

#### TypeScript luokan järjestys

```typescript
class Luokka implements OnInit {

    public amount: number;
    public string: string;


    constructor(private _service: Service) {}

    ngOnInit() {
      this.amount = this.returnNumber();
    }


    public returnNumber(): number {
      return 5;
    }


    private returnNumbers(): number[] {
      return [1, 2, 3, 4, 5];
    }

}
```

### Isot ja pienet kirjaimet
Kaikki luokkatyyppimuuttujat kirjoitetaan aina isolla alkukirjaimella.

### Suojausmääreet
Muuttujien sekä metodien suojausmääreet tullaan määrittelemään sen mukaan, kuinka niitä tullaan käyttämään komponentin ulkopuolella. Private-suojausmäärettä ei siis käytetä jos muuttujaan laitetaan vain arvo/arvoja.

## Whitespacen käyttö
Sisennyksen määrä on 2. Metodin parametri- ja kaarisulkeiden välissä tulee olla yksi tyhjä väli. Taulukon alkioden välissä tulee olla yksi, joka sijaitsee pilkun jälkeen.

```javascript
// Oikea tapa. Tässä on oikea määrä whitescapea. Sulkeen ja kaarisulkeen välillä ON tyhjä väli. Metodin parametrien välissä pilkun jälkeen on yksi tyhjä väli.
function method(x, y, z) {
  console.log('Moi');
}

// Oikea tapa. Alkioden välissä on tyhjä
const array = [1, 2, 3, 5, 8];

// Väärä tapa. Alkioden välissä ei ole tyhjää
const array2 = [1, 2,3,4 ,5];

// Väärä tapa. Tässä on väärä määrä whitescapea. Myöskin sulkeen ja kaarisulkeen 
// välissä EI ole tyhjää. Metodin parametrien välissä pilkun jälkeen ei ole yhtä 
// tyhjää väliä.
function method(x,y,z){
  console.log('Moi');
}
```

## Routet
Backend: (```express/routes```). Routet tulevat ```module.exports = app => {}``` funktion sisään. Routejen väliin tulee 1 väli ja jokainen route kommentoidaan lyhyesti.
```javascript
const Controller = require('../controllers/controler.controller');

module.exports = app => {
  
  // Gets you stuff from database
  app.get('/url/url/url', Controller.getStuff());

  // Post new stuff to database
  app.post('/url/url/url/:id', Contoller.doStuff());
  
}
```

## Controllerit 
Backend: (```express/controllers```).
Controller-funktiot sijoitetaan oliomuuttujaan. Jokainen funktio kommentoidaan JSDocilla. Funktioiden välillä on 2 väliä. Funktion ensimmäinen rivi erotetaan muusta funktiosta. Muuten erottelu on tilanteesta riippuen vapaata.
```javascript
const libraries = require('library');

const LikeController = {

  /**
   * GETS STUFF
   * 
   * Function which'll get stuff from database. This information will
   * be sent back to frontend etc.
   * 
   * @param {string} req.params.id ID of the stuff we want to receive
   * 
   */  
  getCommentAmount: (req, res) => {

    libraries.count({
      where: { id: req.params.id }
    }).then(stuff => {
      return res.send(stuff)
    }).catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
  },


   /**
    * POST STUFF TO DATABASE
    * 
    * Function which'll post stuff to database.
    * 
    * @req.body.stuff {stuff} Contains stuff which will be 
    * saved to database.
    * 
    */
    getCommentAmount: (req, res) => {

      libraries.post({
        where: { id: req.params.id }
      }).then(stuff => {
        return res.send(stuff)
      }).catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
    }

}

```

## Kommentointikäytänteet
Käytämme JSDoc-kommentointityökalua luokkien sekä metodien dokumentointiin. Kommentointi englanniksi. Otsikko kirjoitetaan isoilla kirjaimilla, jonka jälkeen seuraa lyhyt kuvaus metodin/luokan toiminnasta. Lopuksi kommentoidaan parametrit, muuttujat ja palautettavat arvot.

```javascript
 /**
   * RETURNS NUMBERS
   *
   * Function which returns numbers.
   *
   * @param {number} x Number which will be returned.
   * @param {number} y Number which will be returned.
   * @return {number} Returns numbers
   *
   */
  function returnNumbers(x, y) {
    return x, y;
  }

```
Kuten tässä esimerkissä, kommentin ja kommentoitavan väliin ei lisätä rivinvaihtoa.

Muuttujien kommentti lisätään niiden yläpuolelle.

```javascript
// This is right way to create a comment
const name = 'Matti';

const name = 'Maija'; // This is wrong.

```
