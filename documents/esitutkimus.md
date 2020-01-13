# Esitutkimus

- [Esitutkimus](#esitutkimus)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Johdanto](#johdanto)
  - [Visio](#visio)
  - [Käyttäjäkertomukset ja tekniset rajoitteet](#k%c3%a4ytt%c3%a4j%c3%a4kertomukset-ja-tekniset-rajoitteet)
    - [1. Käyttäjäkertomukset](#1-k%c3%a4ytt%c3%a4j%c3%a4kertomukset)
      - [Käyttäjä 1: Aikataulujen kanssa vaikeuksissa oleva opiskelija](#k%c3%a4ytt%c3%a4j%c3%a4-1-aikataulujen-kanssa-vaikeuksissa-oleva-opiskelija)
        - [Ykstyiskohdat](#ykstyiskohdat)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit)
      - [Käyttäjä 2: Mallioppilas ja aktiivinen harrastaja](#k%c3%a4ytt%c3%a4j%c3%a4-2-mallioppilas-ja-aktiivinen-harrastaja)
        - [Ykstyiskohdat](#ykstyiskohdat-1)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-1)
      - [Käyttäjä 3: Motivaatiopulasta kärsivä opiskelija](#k%c3%a4ytt%c3%a4j%c3%a4-3-motivaatiopulasta-k%c3%a4rsiv%c3%a4-opiskelija)
        - [Yksityiskohdat](#yksityiskohdat)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-2)
      - [Käyttäjä 4: Vain todo- ominaisuutta tarvitseva käyttäjä](#k%c3%a4ytt%c3%a4j%c3%a4-4-vain-todo--ominaisuutta-tarvitseva-k%c3%a4ytt%c3%a4j%c3%a4)
        - [Yksityiskohdat](#yksityiskohdat-1)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-3)
    - [2. Tekniset vaatimukset](#2-tekniset-vaatimukset)
      - [1. Selaimet](#1-selaimet)
      - [2. Tietoturva](#2-tietoturva)
      - [3. Skaalautuvuus](#3-skaalautuvuus)
      - [4.Luotettavuus](#4luotettavuus)
      - [5. Hallittavuus](#5-hallittavuus)
  - [Ratkaisuvaihtoehdot](#ratkaisuvaihtoehdot)
    - [1. Web-sovellus](#1-web-sovellus)
      - [1. Toteutusympäristö](#1-toteutusymp%c3%a4rist%c3%b6)
      - [2. Toteutettavat kertomukset](#2-toteutettavat-kertomukset)
      - [3. Työmääräarviot](#3-ty%c3%b6m%c3%a4%c3%a4r%c3%a4arviot)
      - [4. Pros & Cons](#4-pros--cons)
    - [2. Mobiiliaplikaatio](#2-mobiiliaplikaatio)
      - [1. Toteutusympäristö](#1-toteutusymp%c3%a4rist%c3%b6-1)
      - [2. Toteutettavat kertomukset](#2-toteutettavat-kertomukset-1)
      - [3. Työmääräarviot](#3-ty%c3%b6m%c3%a4%c3%a4r%c3%a4arviot-1)
      - [4. Pros & Cons](#4-pros--cons-1)
  - [Yhteenveto](#yhteenveto)

## Projektin tiedot

\<Lintukoto>

Tekijät: Annika Manninen, Siina Kaakinen, Rasmus Savolainen, Tuukka Neijonen, Herni Parviainen, Juho Tuomainen



## Johdanto


Tämän dokumentin tarkoituksena on tuottaa esitutkimus Lintukoto-sovelluksesta. Lintukoto-sovellus on opiskelijoille tarkoitettu ajanhallintatyökalu, jonka tavoitteena on tukea opiskelijoiden opintojen etenemistä sekä auttaa arjenhallinnassa.  

Luvussa 2 käymme läpi visiomme sovelluksemme taustalla. Luvussa 3 esittelemme sovellukseemme liittyviä käyttäjäkertomuksia erilaisten opiskelijapersoonien avulla. Mahdollisia ratkaisuvaihtoehtoja sovelluksen toteuttamiseen sekä niiden etuja käymme läpi luvussa 4. Dokumentin päättää luku 5, jossa summaamme esitutkimuksemme ja suosittelemme jatkotoimenpiteitä projektillemme. 
 

## Visio

Lintukoto on opiskelijoille tarkoitettu opintojen hallintatyökalu, joka visualisoi opintojaksot ja tukee opiskelijaa ajanhallinnan kanssa. Lintukoto kannustaa opiskelijaa pitämään huolta opintojaksoistaan samalla tavalla kuin hoidetaan virtuaalisia lemmikkejä. Lintukoto myös tukee opiskelijan hyvinvointia ja jaksamista opintojen aikana.  

Lintukoto-sovelluksessa jokainen kurssi esitellään pöllönä. Kaikki lukukauden kurssit visualisoidaan “lintuorreksi”, jossa näkee yhdellä silmäyksellä kaikki sillä hetkellä käynnissä olevat opinnot. Pöllön koko kertoo opintojakson laajuudesta eli kuinka monen opintopisteen arvoinen se on. Mitä enemmän pisteitä kurssista saa, sitä suurempi pöllö on.  
Opintojaksojen pöllöjä hoidetaan hoitamalla opintoja. Jos opiskelija palauttaa tehtävät ajallaan, käy pakollisilla tunneilla ja hoitaa tentit, hänen pöllönsä voivat hyvin. Lisäksi sovellus palkitsee tehtävänpalautukset virtuaalisilla palkinnoilla, joilla voi koristella kyseisen opintojakson pöllöä. Jos opiskelija ei voi huolehtia kurssin vaatimuksista, myös kurssin pöllö alkaa voida huonosti. Kun opintojakso on suoritettu, otetaan pöllöstä kuva ja kuva tallentuu galleriaan/albumiin. Pöllö itse poistuu orrelta, jotta orsi kuvastaa sitä mitä sillä hetkellä todella on työn alla. Pöllöt tarjoavat mahdollisuuden tehdä muistiinpanoja kyseiseen kurssiin liittyen. Näin kurssin muistiinpanot ovat aina yhdessä paikassa löydettävissä. 

Ajanhallintaan sovellus tarjoaa kalenterin. Kalenteriin kootaan kaikkien sen hetkisten opintojaksojen kontaktitunnit ja opiskelija voi itse lisätä kalenteriin omat kiinteät menonsa kuten harrastukset, työt ym. omat menot. Lisäksi kalenteriin saadaan lisättyä jokaisen kurssitehtävän palautusajat, tentit jne. Aina kun uusi tehtävänpalautus, läksy tai ryhmätyö nousee kalenteriin, kalenteri alkaa ehdotella niiden teolle sopivia ajankohtia. Opiskelija voi sitten hyväksyä näitä ehdotuksia, jolloin ne kiinnittyvät osaksi opiskelijan lukujärjestystä. Jos kyseessä on ryhmätyö, kalenterille voi kertoa ketkä sinun ryhmääsi kuuluvat ja kalenteri automaattisesti vertailee ryhmäläisten kalentereita löytääkseen kaikille avoimet slotit ryhmätyön tekemiseen. 

Opiskelijan hyvinvointi otetaan Lintukoto-sovelluksessa huomioon antamalla opiskelijalle oma “henkipöllö”, joka välittää erityisesti juuri opiskelijan hyvinvoinnista. Jos opiskelijan kurssipöllöt eivät voi hyvin, henkipöllö alkaa huolestua opiskelijasta. Henkipöllö saattaa kysellä opiskelijalta kyllä/ei-kysymyksiä kuten “Onko sinulla liikaa kursseja tällä hetkellä?” tai “Oletko vielä motivoitunut opiskelemaan?” ja opiskelijan vastausten perusteella henkipöllö saattaa mm. ehdottaa, että opiskelija olisi yhteyksissä omaan tutoropettajaansa, opinto-ohjaajaan, koulupsykologiin tms. Henkipöllö voi myös auttaa opintojaksojen tehtävien suoritusajankohdan valinnoissa huomioimalla mm. onko opiskelija parhaimmillaan tehtävien tekoon aamuisin vai iltaisin. 

Kaikista näistä toiminnoista saadaan visuaalinen tapa esittää opiskelijalle tämän opintojen eteneminen ja kehitys ilman että opiskelija kokee koko opiskeluajan olevan pelkkää suorittamista. Lintukoto opettaa opiskelijalle, kuinka tehtävien tekoon kannattaa varata aikaa ja kannustaa pyytämään apua ajoissa, jos opinnot eivät suju. Jos opiskelija ei kaipaa ylimääräistä visualisointia opintojaksojensa suorittamiseen, Lintukoto-sovelluksen asetuksista voi halutessaan ottaa pois päältä ylimääräisen visualisoinnin. Hän voi asetuksista karsia pois pöllöorren ja kalenterin ehdotteluominaisuudet, jolloin jäljelle jää vain lukujärjestys ja tehtävien suorituslista. Tällöin myöskään ylimääräinen visualisointi ei syö opiskelijan motivaatiota kurssien hoitamiseen. 

## Käyttäjäkertomukset ja tekniset rajoitteet

### 1. Käyttäjäkertomukset

#### Käyttäjä 1: Aikataulujen kanssa vaikeuksissa oleva opiskelija

##### Ykstyiskohdat

“Minusta on haastavaa saada aikataulutettua opintoja ja vapaa-aikaa. Aloitan usein tekemään koulutöitä liian myöhään ja huomaan, että tehtävät kasaantuvat helposti. Lintukoto sovelluksessa luokkakaverini lisäävät puolestani kaikki koulutehtävät Lintukoto sovelluksen tehtävälistalleni, josta voin helposti siirtää ne omaan kalenteriini. Sovellus ehdottaa minulle sopivaa aikaa, jolloin kalenterissani on tilaa tehtävän tekemiselle. Tämä helpottaa huomattavasti aikatauluttamista, sillä näen tehtävälistasta reaaliajassa kaikkien tehtävien deadlinet ja näin ollen tiedän täsmällisesti, kuinka paljon tehtävää on kulloinkin “rästissä”. Joskus kuitenkin jätän tehtävät silti tekemättä ja tällöin sovelluksen henkipöllö ehdottaa minulle tapaamista opon kanssa, jolloin saan taas opinnon järjestykseen.” 

##### Hyväksymiskriteerit

* Opiskelija alkaa hahmottamaan opintonsa useasta kurssista (pöllöstä) koostuvaksi kokonaisuudeksi, joista jokainen vaatii oman työpanoksensa. 

* Opiskelija tiedostaa oman aikatauluttamisen merkityksen opinnoissa etenemiseksi. 

* Opiskelija saa tarvittaessa tukea koulun tukiverkosta (esim. opot, tuutorit, psykologi, oppilaitospappi).

#### Käyttäjä 2: Mallioppilas ja aktiivinen harrastaja 

Opiskelija hoitaa tehtävänsä ja opinnot huolellisesti. Hän tarvitsee työkalun, jolla voi organisoida opintojaan, jotta voi tehokkaasti ennakoida ja hoitaa tehtävät ajoissa. Hän haluaa myös olla apuna muille oppilaille lisäämällä aina saadut tehtävät järjestelmään. Kurssien vaatimat ryhmätyöt aiheuttavat kuitenkin usein päänvaivaa, koska opiskelijalla on paljon harrastuksia. Tästä syystä kaikille ryhmäläisille sopivia ajankohtia on työlästä sopia. 

##### Ykstyiskohdat

“Tykkään pysyä aina ajan tasalla tehtävistä, jotta voin hoitaa ne alta pois mahdollisimman aikaisessa vaiheessa, jolloin aikaa jää myöhemmin aiheisiin syvällisempään paneutumiseen. Lisään aina tehtävät järjestelmään, kun olen saanut ne tietooni. Sovellus helpottaa myös aikataulutustani, sillä voin lisätä myös vapaa-ajan harrastukseni kätevästi Lintukoto- kalenteriin. Lisäksi ryhmätöissä Lintukoto vertailee heti kaikkien ryhmäläisten kalentereita, mikä nopeuttaa yhteisten työskentelyajankohtien sopimista. En tarvitse enää muuta kalenteria sen rinnalle. “ 

##### Hyväksymiskriteerit 

* Opiskelija tuntee merkityksen tunnetta, kun voi auttaa muita opiskelijoita opintojen aikatauluttamisessa. 
* Opiskelija kokee hallitsevansa opiskelun aikatauluttamista niin, että aikaa jää myös omille harrastuksille. 

#### Käyttäjä 3: Motivaatiopulasta kärsivä opiskelija 

Opiskelijaa ei yleensäkään kiinnosta opiskella. Hän tarvitsee lisämotivaatiota kurssien suorittamiseksi. Lisämotivaatiota tarjoaa Lintukoto sovelluksen palkitsemisjärjestelmät.  

##### Yksityiskohdat

“Mielestäni monet opettajien antamat tehtävät ovat huonoja, eikä niistä oikeastaan edes opi mitään. Lintukoto sovelluksen avulla saan kuitenkin lisämotivaatiota kurssien hoitamiseen, sillä voin aina tuunata kasvavaa pöllökokoelmaani ja lisätä pöllöille uusia skinejä, kun saan tehtäviä ja kursseja suoritettua. Tämä auttaa minua pysymään opintojen aikataulussa mukana. Tykkään myös kahvista ja oppilaskunnan kahvila tarjoaa aina ilmaisen kahvin kymmenen tehtävän suorittamisen jälkeen. Se myös lisää hieman motivaatiotani opiskeluun. “  

##### Hyväksymiskriteerit

* Opiskelija kokee koulutehtävien tekemisen mielekkäämmäksi saatuaan erilaisia palkintoja. 
* Opiskelija pysyy kärryillä siitä, mitä häneltä opinnoissa vaaditaan. 

#### Käyttäjä 4: Vain todo- ominaisuutta tarvitseva käyttäjä 

Opiskelija tarvitsee vain jonkin palvelun, josta näkee mitä tehtäviä hänen tulee tehdä. Muut ylimääräiset ominaisuudet eivät kiinnosta häntä ollenkaan. 

##### Yksityiskohdat

“Minua ei kiinnosta mikään pöllöjen tuunailu. Haluan keskittyä olennaiseen eli siihen, mitä tehtäviä täytyy tehdä ja milloin ne tulee olla tehtynä. Sovelluksesta näen aina suoraan mitä tehtäviä lähiaikoina tulee tehdä ja sen avulla saan hommat hoidettua aina ajoissa. Sovelluksessa oleva ominaisuus, jolla voi piilottaa kaikki pöllöhommat on mielestäni hyvä ominaisuus.” 

##### Hyväksymiskriteerit

* Opiskelija pystyy käyttämään sovellusta muistilappujen tapaan, ilman turhaa “hössötystä”. 
* Opiskelija ei koe sovellusta liian holhoavana tai “typeränä”. 

### 2. Tekniset vaatimukset

#### 1. Selaimet

* Sovelluksen tulee toimia seuraavien selainten uusimmilla versioilla: Mozilla Firefox, Google Chrome, Safari, Microsoft Edge, Internet Explorer sekä Opera. 

#### 2. Tietoturva

* Opiskelija kirjautuu sovellukseen omilla tunnuksillaan ja vain hän pystyy hallinnoimaan esim. Opintojaksojensa tilaa. 
* Sovelluksessa käsitellään henkilötietoja, joten sen tulee olla toteutettu ilman haavoittuvuuksia. Tietoturvakonsultin tulee hyväksyä toteutus. 

#### 3. Skaalautuvuus

* Sovellus on responsiivinen ja siinä on otettu huomioon saavutettavuus.
  
#### 4.Luotettavuus

* Sovelluksen tulee “kestää rasitusta”, eli se ei saa kaatua esim. käyttäjämäärän kasvun myötä. 
* Järjestelmä ei poista/muuta opiskelijan tai hänen kurssiensa tietoja ilman käyttäjän suostumusta.

#### 5. Hallittavuus

* Peruspäivitysten tulee voida toteuttaa niin, ettei sovellukseen tule liian pitkiä (useampi tunti) huoltokatkoja.


## Ratkaisuvaihtoehdot

### 1. Web-sovellus

#### 1. Toteutusympäristö

Koska kyseessä on projekti-idean konseptointi, emme ota vielä jyrkkää kantaa sovelluksen arkkitehtuurisiin vaatimuksiin. Sovelluksella tulee olemaan eri toiminnallisuuksia (kalenteri, tehtävät sekä virtuaalilemmikit) sekä yhteys tietokantaan ja mahdollisesti integraatio koulun järjestelmiin, kuten Asio (tuleva Peppi) ja/tai Optima.  

#### 2. Toteutettavat kertomukset

#### 3. Työmääräarviot

Konseptimme sovellus on hyvin skaalautuva, eli sen tarvitsemien työtuntien määrää on hyvin vaikea arvioida vielä suunnittelun tässä vaiheessa. Perus web-sovelluksen tekemiseen arvioimme tässä vaiheessa kuluvan hyvin TiCorporatelle varatut 25 op eli noin 625 työtuntia. 

#### 4. Pros & Cons

Websovelluksen etuja on skaalautuvuus. Se skaalautuu helposti lähes kaikille laitteille ja täten sovellusta olisi mahdollista käyttää useammalla laitteella. Kun sovellus on helposti saatavilla kaikilla laitteilla, sitä luultavasti tulee myös käytettyä herkemmin, kuin esim. vain mobiilialustoilla toimivaa sovellusta. Web sovellus on myös nopea ja se on käyttäjän käytettävissä ilman erillistä sovelluksen lataamista. Tämä lisää helppokäyttöisyyttä. Suunnittelemamme sovellus taipuu myös erittäin hyvin websovellukseksi ilman suurempia innovaatioita.  

Websovelluksen huonona puolena voidaan pitää hitaampaa käytön aloittamista verrattuna mobiilisovellukseen. Käyttäjän tulee ensin käynnistää webselain, siirtyä sovelluksen url-osoitteeseen ja kirjautua sisään järjestelmään ennen käytön aloittamista, kun mobiilisovelluksessa vastaava toimenpide olisi vain sovelluspainikkeen klikkaaminen.  

### 2. Mobiiliaplikaatio

#### 1. Toteutusympäristö

Mobiiliaplikaatio voidaan luoda suunnitellun web-sovelluksen pohjalta, eli web-sovellus tullaan muuntamaan esim. Ionicin avulla mobiililaitteille soveltuvaksi. Mobiiliaplikaatiota luotaessa tulee huomioida sen soveltuvuus eri käyttöjärjestelmille sekä miettiä, mistä sovelluksen pystyy puhelimelle lataamaan (Google Play, App Store, omat verkkosivut). 
Toinen mahdollinen lähestymistapa on aloittaa sovelluksen luonti puhtaasti mobiiliversio edellä ja hyödyntää web-sivua ainoastaan sovelluksen markkinointi- ja infosivuna.  

#### 2. Toteutettavat kertomukset

Mobiiliaplikaatiossa korostuu erityisesti käyttäjätarinoiden erilaiset motiivit; toinen käyttäjä kaipasi ”kädestä pitämistä”, kun taas toinen koki visuaalisuuden ja pelillistämisen hyödyttömäksi. Tämän vuoksi käyttäjien hallintamahdollisuudet sovelluksessa korostuvat, turhaksi koetut ilmoitukset tulee voida mykistää sekä visuaalista ulkoasua muokata rajallisesti, niin että käyttäjä kokee sen vastaavan hänen tarpeitaan.   

#### 3. Työmääräarviot

Mikäli matkapuhelimella tai tabletilla toimiva sovellus luodaan web-sovelluksen pohjalta, on sen vaatima työmäärä huomattavasti pienempi kuin puhtaan mobiiliversion luonti. Syksyllä 2019 käydyssä “Web-sovellluskehitys”- opintojaksossa loimme tekemästämme sovelluksesta mobiiliapplikaation, eli perustieto aiheesta löytyy ryhmäläisiltämme jo.  

Puhtaan mobiilisovelluksen luomisesta ei ryhmällä ole kokemusta, eli sen vaatima työmäärä tulee oletettavasti olemaan suurempi. Tämä sisältäisi mm. uusien teknologioiden kartoittamista sekä niiden käytön opettelua. 

#### 4. Pros & Cons

Saamme perustiedot ja -taidot siitä, mitä toimivan mobiilisovelluksen tekeminen käytännössä vaatii. 
Mobiiliapplikaation etu on helppokäyttöisyys, käytännöllisyys ja käytön nopeus.


## Yhteenveto

Lintukoto-sovellus on hyvin mukautuvainen ja skaalautuva sovellus. Sen toiminnan voi pelkistetysti ajatella olevan kalenteri ja muistilaput samassa paikassa. Laajemmin ajateltuna sovellus on työkalu, jolla hallitset arkeasi ja samalla etenet opinnoissasi. Mikäli integraatio esim. Optimaan sekä Asioon/Peppiin onnistuu ilman suuria haasteita, voi Lintukoto-sovellusta hyödyntää entistäkin laajemmin opiskelun hallintaan. Tuntitehtävät sekä ryhmätyöt voisivat päivittyä suoraan sovellukseen niiden julkaisun jälkeen, eikä tehtävien ajan tasalla pitäminen vaatisi enää aktiivista opiskelijaa.  Sovelluksen perustoimintaa voidaan jatkokehittää ja sitä voidaan muokata palvelemaan myös peruskouluja sekä erilaisia projektimuotoisia työelämä hankkeita, joissa on paljon huomioitavia “liikkuvia osia”. 
Ehdotamme järjestelmän toteutustavaksi websovellusta, sillä se skaalautuu useimmille laitteille ja pidämme tärkeänä, että järjestelmään on pääsy myös mobiililaitteiden lisäksi perinteistä tietokonetta käyttäen.  
Lintukoto-sovellus on toteuttamisen arvoinen hanke, sillä sen menestyksellinen toteuttaminen vaatii osaajiltaan taitoja monelta alalta; alkaen UI-suunnittelusta päätyen integraatioiden rajapintoihin. Tämän lisäksi mm. graafisensuunnittelun sekä liiketoimintataitoja tullaan tarvitsemaan projektin maaliin saattamiseen. # Lintukoto
