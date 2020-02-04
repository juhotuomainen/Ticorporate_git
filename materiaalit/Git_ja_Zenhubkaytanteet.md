# Code guidelines
- [Johdanto](#Johdanto)
- [GitHub](#GitHub)
    - [Branchit eli haarat](#Branchit_eli_haarat)
    - [Pull Requestit](#Pull_Requestit)
- [ZenHub](#ZenHub)
    - [Epic](#Epic)
    - [Backlogit](#Backlogit)
    - [ZenHubin käyttö](#ZenHubin_käyttö)
    - [Issuen tarkastaminen/testaaminen](#Issuen_tarkastaminen/testaaminen)


## Johdanto
Tähän dokumenttiin on koottu yleisohjeet Lintukoto-sovellun GitHubin ja ZenHubin käyttöön, jotta kaikilla olisi yhteneväiset työskentelytavat projektin aikana.

## GitHub
Yhtenäiset käytänteet korostuvat Gitin käytössä esimerkiksi eri haarojen ylläpidossa ja pull requestien luomisessa ja hyväksymisessä.

### Branchit eli haarat
Haarat nimetään näin: kaikki pienellä ja välilyönnit korvattu alaviivalla.
Nimen tulee kuvata hyvin mihin haara liittyy

#### Olemassa olevat haarat
- master
- masteri_debug
- kehitys
- kalenteri_sivu
- aktiiviset_kurssit_sivu
- asetukset_sivu
- palvelin

### Pull Requestit
Pull request luodaan aina kun ollaan tuomassa kehitys-haaraa tai masterinbugikorjaukset-haaraa masteriin. **Muita haaroja kuin kehitys-haaraa tai masterinbugikorjaukset-haaraa ei saa yhdistää suoraan masteriin!** Masteriin pullataan sisältö yleensä sprintin päätteeksi kun on yhdessä katsottu mitä on saatu aikaan ja hyväksytty se.

Kaikki muutokset tehdään omiin haaroihinsa. Jos kyseiselle muutoskokonaisuudelle ei ole olemassa sopivaa haaraa, sen voi luoda aiemmin mainittujen nimeämiskäytänteiden mukaan. Sopivissa väleissä tai valmistuttuaan, näistä muista haaroista tehdään pull request kehitys-haaraan. 

Pull requestin tekijän tulee valita kaksi henkilöä tiimistä tarkistamaan pull request. Tekijä ei saa olla itse tarkastaja. Yleensä tarkastajan olisi hyvä olla testaaja ja product owner (PO), mutta sisällöstä riippuen myös muut tarkastajat ovat hyväksyttyjä.

## ZenHub
ZenHubin käyttöön liittyviä asioita ovat mm. Epicit, backlogit (sprint & product), käyttö sekä tarkastaminen/testaaminen.

### Epic
Epic luodaan aina isommasta kokonaisuudesta kuten yhdestä sivusta, isosta ominaisuudesta ym. Epicin nimessä tulee olla tunniste (esim. US5), jota käytetään aina ko. epicille tehdyillä issueilla.

Zenhubissa on Non-stop epic, jonka alle listataan kaikki issuet, jotka kulkevat mukana useamman sprintin ajan. Tällaisia ovat mm. dokumenttien päivittämiset, SM:n, PO:n ja testaajan viikottaiset vastuuhommat ym. Joka sprintissä näiden alle luodaan vain sen sprintin kestoinen issue. Tämän issuen alle voi kommentoida aina sprintin aikana ja lopuksi mitä on saanut aikaan, mutta issue tulee sulkea sprintin päätyttyä.

### Backlogit
ZenHubissa meillä on käytössä kaksi backlogia: product backlog ja sprint backlog.

Product backlog on meidän backlogissa pelkkä backlog. Siihen kootaan kaikki epiceistä pilkotut issuet. Ylinpänä listassa on tärkeimmäksi priorisoidut ja alinpana vähiten priorisoidut. Backlogissa olisi hyvä olla aina vähintään kahden sprintin verran tekemistä.

Jokaisessa sprintissä backlogista valitaan tekemistä sprint backlogiin. Sprint backlogin issuet ovat ne mitä työstetään sprintissä. Vain jos, sprint backlogissa ei ole enää tekemistä, voi hakea backlogista tekemistä kesken sprintin.

### ZenHubin käyttö
Aina kun sprint backlogista valitaan issue työn alle, se tulee siirtää In Progress-jonoon ja merkata siihen tekijä(t) jotka sitä tekevät. Samalla on myös hyvä varmistaa, että issue on merkattu oikeaan sprinttiin (milestone) ja että sillä on arvioitu pistemäärä (estimate 1-5). Jos jokin näistä puuttuu, ne tulee valita.

Jos issuen työstäminen pitkittyy, on hyvä kirjoittaa issueeseen kommentti mitä siihen on jo tehnyt. Issueeseen voi myös lisätä labelin, joka kertoo nopeasti syyn miksi jokin homma ei etene (bugi tai vast. ongelma).

### Issuen tarkastaminen/testaaminen
Kun issue on saatu tekijän mielestä valmiiksi, se siirretään Review/QA-kohtaan, josta testaaja käy aikaansaannokset läpi. Testaaja voi myös delekoida issueiden tarkastamista eteenpäin muille, kunhan tarkastaja ei ole issuen tekijä itse.

Jos issue läpäisee testauksen, se tulee sulkea (close issue).
