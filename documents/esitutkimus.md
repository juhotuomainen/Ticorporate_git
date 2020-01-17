# Esitutkimus (versio 1.0)

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

Tekijät: Annika Manninen, Siina Kaakinen, Rasmus Savolainen, Tuukka Neijonen, Henri Parviainen, Juho Tuomainen

## Termit ja lyhenteet

## Viitteet

## Johdanto

Tämän dokumentin tarkoituksena on tuottaa esitutkimus Lintukoto-sovelluksesta. Lintukoto-sovellus on opiskelijoille tarkoitettu ajanhallintatyökalu, jonka tavoitteena on tukea opiskelijoiden opintojen etenemistä sekä auttaa arjenhallinnassa.  

Luvussa 2 käymme läpi visiomme sovelluksemme taustalla. Luvussa 3 esittelemme sovellukseemme liittyviä käyttäjäkertomuksia erilaisten opiskelijapersoonien avulla. Mahdollisia ratkaisuvaihtoehtoja sovelluksen toteuttamiseen sekä niiden etuja käymme läpi luvussa 4. Dokumentin päättää luku 5, jossa summaamme esitutkimuksemme ja suosittelemme jatkotoimenpiteitä projektillemme. 
 
## Visio

Lintukoto on opiskelijoille tarkoitettu opintojen hallintatyökalu, joka visualisoi opintojaksot ja tukee opiskelijaa ajanhallinnan kanssa. Lintukoto kannustaa opiskelijaa pitämään huolta opintojaksoistaan samalla tavalla kuin hoidetaan virtuaalisia lemmikkejä. Lintukoto myös tukee opiskelijan hyvinvointia ja jaksamista opintojen aikana.   

Lintukoto-sovelluksessa jokainen kurssi esitellään pöllönä. Kaikki lukukauden kurssit visualisoidaan “lintuorreksi”, jossa näkee yhdellä silmäyksellä kaikki sillä hetkellä käynnissä olevat opinnot. Pöllön koko kertoo opintojakson laajuudesta eli kuinka monen opintopisteen arvoinen se on. Mitä enemmän pisteitä  kurssista saa, sitä suurempi pöllö on.   

Opintojaksojen pöllöjä hoidetaan hoitamalla opintoja. Jos opiskelija palauttaa tehtävät ajallaan, käy pakollisilla tunneilla ja hoitaa tentit, hänen pöllönsä voivat hyvin. Lisäksi sovellus palkitsee tehtävänpalautukset pisteillä, joilla voi hankkia "kaupasta" virtuaalisia palkintoja. Niillä voi koristella opintojaksojen pöllöjä. Jos opiskelija ei voi huolehtia kurssin vaatimuksista, myös kurssin pöllö alkaa voida huonosti. Pöllö tokenee, kun kurssille alkaa taas kertyä suorituksia. Kun opintojakso on suoritettu, pöllöstä otetaan kuva ja se tallentuu galleriaan/albumiin. Pöllö itse poistuu orrelta, jotta orsi kuvastaa sillä hetkellä työn alla olevia opintoja. Sovellus tarjoaa muistiinpanojen tekomahdollisuuden kyseiseen kurssiin liittyen esimerkiksi klikattaessa pöllöä. Näin kurssin muistiinpanot ovat löydettävissä aina yhdestä paikasta. Vanhoihin muistinpanoihin jo loppuneilta kursseilta pystyy palaamaan albumin kautta. 

Ajanhallintaan sovellus tarjoaa kalenterin, jonka ympärille kaikki muu sovelluksen toiminta rakentuu. Kalenteriin kootaan kaikkien sen hetkisten opintojaksojen kontaktitunnit, ja opiskelija voi itse lisätä kalenteriin omat kiinteät menonsa kuten harrastukset, työt ym. Lisäksi kalenteriin saadaan lisättyä jokaisen kurssitehtävän palautusajat, tentit jne. Aina kun uusi tehtävänpalautus, läksy tai ryhmätyö nousee kalenteriin, se alkaa ehdotella niiden teolle sopivia ajankohtia. Opiskelija voi sitten hyväksyä niitä, jolloin ne kiinnittyvät opiskelijan lukujärjestykseen. Jos kyseessä on ryhmätyö, kalenterille voi kertoa ketkä kuuluvat kuuluvat ja se vertailee automaattisesti ryhmäläisten kalentereita löytääkseen kaikille avoimet slotit eli ajankohdat ryhmätyön tekemiseen.  

Opiskelijan hyvinvointi otetaan Lintukoto-sovelluksessa huomioon antamalla opiskelijalle oma “henkipöllö”, joka välittää erityisesti juuri opiskelijan hyvinvoinnista. Jos opiskelijan kurssipöllöt eivät voi hyvin, henkipöllö alkaa huolestua opiskelijasta. Henkipöllö saattaa kysellä opiskelijalta kyllä/ei-kysymyksiä kuten “Onko sinulla liikaa kursseja tällä hetkellä?” tai “Oletko vielä motivoitunut opiskelemaan?” ja opiskelijan vastausten perusteella henkipöllö saattaa mm. ehdottaa, että opiskelija olisi yhteyksissä omaan tutoropettajaansa, opinto-ohjaajaan, koulupsykologiin tms. Henkipöllö voi myös auttaa opintojaksojen tehtävien suoritusajankohdan valinnoissa huomioimalla mm. onko opiskelija parhaimmillaan tehtävien tekoon aamuisin vai iltaisin. Henkipöllön on myös tarkoitus muistuttaa opiskelijaa, että tasapainoiseen elämään kuuluu muutakin kuin opiskelu. Henkipöllö toivoo, että opiskelija muistaa nukkua tarpeeksi ja pitää taukoja, tapaa ystäviään ja puhuu tarvittaessa tasapainoisesta ravinnosta ja päihteiden käytön riskeistä. Henkipöllö myös näyttää tarvittaessa kurssin etenemisen (esim. 70 % kurssista tehty) ja kannustaa opiskelijaa ja kiittää hyvästä työstä. Nämä lisätoiminnot ovat sellaisia, joihin paneudutaan jos jää aikaa. 

Kaikista toiminnoista saadaan visuaalinen tapa esittää opiskelijalle tämän opintojen eteneminen ja kehitys ilman, että opiskelija kokee koko opiskeluajan olevan pelkkää suorittamista. Lintukoto opettaa opiskelijalle, kuinka tehtävien tekoon kannattaa varata aikaa ja kannustaa pyytämään apua ajoissa, jos opinnot eivät suju. Jos opiskelija ei kaipaa ylimääräistä visualisointia opintojaksojensa suorittamiseen, Lintukoto-sovelluksen asetuksista voi halutessaan ottaa pois päältä ylimääräisen visualisoinnin. Hän voi karsia asetuksista pois pöllöorren ja kalenterin ehdotteluominaisuudet, jolloin jäljelle jää vain lukujärjestys ja tehtävien suorituslista. Tällöin myöskään ylimääräinen visualisointi ei laske opiskelijan motivaatiota kurssien hoitamiseen. 

## Käyttäjäkertomukset ja tekniset rajoitteet

### 1. Käyttäjäkertomukset

#### Käyttäjä 1: Aikataulujen kanssa vaikeuksissa oleva opiskelija

Käyttäjällä on ollut hankaluuksia aikatauluttaa koulussa saatuja tehtäviä. Hän tarvitsee helpon tavan jäsentää, tarkastella ja aikatauluttaa näitä tehtäviä.

##### Ykstyiskohdat

“Minusta on haastavaa saada aikataulutettua opintoja ja vapaa-aikaa. Aloitan usein tekemään koulutöitä liian myöhään ja huomaan, että tehtävät kasaantuvat helposti. Lintukoto sovelluksessa luokkakaverini lisäävät puolestani kaikki koulutehtävät Lintukoto sovelluksen tehtävälistalleni, josta voin helposti siirtää ne omaan kalenteriini. Sovellus ehdottaa minulle sopivaa aikaa, jolloin kalenterissani on tilaa tehtävän tekemiselle. Tämä helpottaa huomattavasti aikatauluttamista, sillä näen tehtävälistasta reaaliajassa kaikkien tehtävien deadlinet ja näin ollen tiedän täsmällisesti, kuinka paljon tehtävää on kulloinkin “rästissä”. Joskus kuitenkin jätän tehtävät silti tekemättä ja tällöin sovelluksen henkipöllö ehdottaa minulle tapaamista opon kanssa, jolloin saan taas opinnon järjestykseen.”  

##### Hyväksymiskriteerit

* Opiskelija alkaa hahmottamaan opintonsa useasta kurssista (pöllöstä) koostuvaksi kokonaisuudeksi, joista jokainen vaatii oman työpanoksensa.  

* Opiskelija tiedostaa oman aikatauluttamisen merkityksen opinnoissa etenemiseksi.  

* Opiskelija saa tarvittaessa tukea koulun tukiverkosta (esim. opot, tuutorit, psykologi, oppilaitospappi).

#### Käyttäjä 2: Mallioppilas ja aktiivinen harrastaja 

Opiskelija hoitaa tehtävänsä ja opinnot huolellisesti. Hän tarvitsee työkalun, jolla voi organisoida opintojaan, jotta voi tehokkaasti ennakoida ja hoitaa tehtävät ajoissa. Hän haluaa myös olla apuna muille oppilaille lisäämällä aina saadut tehtävät järjestelmään. Kurssien vaatimat ryhmätyöt aiheuttavat kuitenkin usein päänvaivaa, koska opiskelijalla on paljon harrastuksia. Tästä syystä kaikille ryhmäläisille sopivia ajankohtia on työlästä sopia.  

##### Ykstyiskohdat

“Tykkään pysyä aina ajan tasalla tehtävistä, jotta voin hoitaa ne alta pois mahdollisimman aikaisessa vaiheessa, jolloin aikaa jää myöhemmin aiheisiin syvällisempään paneutumiseen. Lisään aina tehtävät järjestelmään, kun olen saanut tiedon niistä. Sovellus helpottaa myös aikataulutustani, sillä voin lisätä myös vapaa-ajan harrastukseni kätevästi Lintukoto-kalenteriin. Lisäksi ryhmätöissä Lintukoto vertailee heti kaikkien ryhmäläisten kalentereita, mikä nopeuttaa yhteisten työskentelyajankohtien sopimista. En tarvitse enää muuta kalenteria sen rinnalle. “ 

##### Hyväksymiskriteerit 

* Opiskelija tuntee merkityksen tunnetta, kun voi auttaa muita opiskelijoita opintojen aikatauluttamisessa. 
* Opiskelija kokee hallitsevansa opiskelun aikatauluttamista niin, että aikaa jää myös omille harrastuksille.  

#### Käyttäjä 3: Motivaatiopulasta kärsivä opiskelija 

Opiskelijaa ei yleensäkään kiinnosta opiskella. Hän tarvitsee lisämotivaatiota kurssien suorittamiseksi. Lisämotivaatiota tarjoaa Lintukoto sovelluksen palkitsemisjärjestelmät sekä henkipöllö.   

##### Yksityiskohdat

“Mielestäni monet opettajien antamat tehtävät ovat huonoja, eikä niistä oikeastaan edes opi mitään. Lintukoto sovelluksen avulla saan kuitenkin lisämotivaatiota kurssien hoitamiseen, sillä voin aina tuunata kasvavaa pöllökokoelmaani ja lisätä pöllöille uusia skinejä, kun saan tehtäviä ja kursseja suoritettua. Tämä auttaa minua pysymään opintojen aikataulussa mukana. On myös mukavaa, kun henkipöllöni kehuu minua, kun saan jotain tehtyä ja tarvittaessa tsemppaa. Se myös lisää hieman motivaatiotani opiskeluun. Tykkään henkipöllöstä myös siksi, että se kannustaa myös muuhun elämään kuin vain opiskeluun. “ 

##### Hyväksymiskriteerit

* Opiskelija kokee koulutehtävien tekemisen mielekkäämmäksi saatuaan erilaisia palkintoja ja kehuja. 
* Opiskelija pysyy kärryillä siitä, mitä häneltä opinnoissa vaaditaan. 
* Opiskelija tiedostaa, että myös muu tasapainoinen elämä vaikuttaa jaksamiseen ja motivaatioon. 

#### Käyttäjä 4: Vain todo- ominaisuutta tarvitseva käyttäjä 

Opiskelija tarvitsee vain jonkin palvelun, josta näkee mitä tehtäviä hänen tulee tehdä. Muut ylimääräiset ominaisuudet eivät kiinnosta häntä ollenkaan.  

##### Yksityiskohdat

“Minua ei kiinnosta mikään pöllöjen tuunailu. Haluan keskittyä olennaiseen eli siihen, mitä tehtäviä täytyy tehdä ja milloin ne tulee olla tehtynä. Sovelluksesta näen aina suoraan mitä tehtäviä lähiaikoina tulee tehdä ja sen avulla saan hommat hoidettua aina ajoissa. Sovelluksessa oleva ominaisuus, jolla voi piilottaa kaikki pöllöhommat on mielestäni hyvä ominaisuus.”  

##### Hyväksymiskriteerit

* Opiskelija pystyy käyttämään sovellusta muistilappujen tapaan, ilman turhaa “hössötystä”. 
* Opiskelija ei koe sovellusta liian holhoavana tai “typeränä”. 

### 2. Tekniset vaatimukset

#### 1. Selaimet

* Sovelluksen tulee toimia seuraavien selainten uusimmilla versioilla: Mozilla Firefox, Google Chrome, Safari, Microsoft Edge, Internet Explorer, Brave sekä Opera. 

#### 2. Tietoturva

* Opiskelija kirjautuu sovellukseen omilla tunnuksillaan ja vain hän pystyy hallinnoimaan esim. Opintojaksojensa tilaa.  
* Sovelluksessa käsitellään henkilötietoja, joten sen tulee olla toteutettu ilman haavoittuvuuksia. Myös GDPR:n asettamat vaatimukset tulee toteutua. Tietoturvakonsultin tulee hyväksyä toteutus. 
* SSL-salausta hyödynnetään sovelluksessa.

#### 3. Skaalautuvuus

* Sovellus on responsiivinen ja siinä on otettu huomioon saavutettavuus  
WCAG 2.0 standardi huomioiden. 
* Skaalautuu mobiilille (Android ja iOS).
  
#### 4.Luotettavuus

* Sovelluksen tulee “kestää rasitusta”, eli se ei saa kaatua esim. käyttäjämäärän kasvun myötä.  
* Järjestelmä ei poista/muuta opiskelijan tai hänen kurssiensa tietoja ilman käyttäjän suostumusta. 

#### 5. Hallittavuus

* Peruspäivitysten tulee voida toteuttaa niin, ettei sovellukseen tule liian pitkiä (useampi tunti) huoltokatkoja.

#### 6. Sovellus on progressiivinen Web-Sovellus (PWA).

#### 7. Angularilla frontend (HTML, JS, TS, CSS) 

#### 8. Backend rakennetaan: MongoDB, Express, Node 

#### 9. AWS-pilvi, mahdollisuuksien mukaan. 

#### 10. Google API (kirjautuminen, analytics) 

#### 11. Rajapinta Asion/Tuudon välillä.

## Ratkaisuvaihtoehdot

### 1. Web-sovellus

#### 1. Toteutusympäristö

Sovelluksella tulee olemaan eri toiminnallisuuksia (kalenteri, tehtävät sekä virtuaalilemmikit) sekä yhteys tietokantaan ja mahdollisesti integraatio koulun järjestelmän rajapintaan, kuten Asio ja/tai Optima. Tästä rajapinnasta saataisiin lukujärjestyksen oppitunnit. Sovellus toteutetaan käyttäen MEAN-stackia eli frontend toteutetaan Angularilla, backend puolestaan käyttäen NodeJS ja Express frameworkia ja tietokanta toteutetaan käyttäen MongoDB tietokantaa.  

#### 2. Toteutettavat kertomukset

Kyseisillä teknologioilla voidaan toteuttaa kaikki suunnitellut kertomukset. Epävarmaa on tässä vaiheessa kuitenkin se, onnistuuko integraatio Asion ja optiman tarjoamiin rajapintoihin.

#### 3. Työmääräarviot

Suunniteltu Lintukoto sovellus on hyvin skaalautuva, eli sen tarvitsemien työtuntien määrää on hyvin vaikea arvioida vielä suunnittelun tässä vaiheessa. Perus web-sovelluksen tekemiseen arvioimme tässä vaiheessa kuluvan hyvin TiCorporatelle varatun 25 opintopisteen tunnit. 

#### 4. Pros & Cons

Websovelluksen etuja on skaalautuvuus. Se skaalautuu helposti lähes kaikille laitteille ja täten sovellusta olisi mahdollista käyttää useammalla laitteella. Kun sovellus on helposti saatavilla kaikilla laitteilla, sitä luultavasti tulee myös käytettyä herkemmin, kuin esim. vain mobiilialustoilla toimivaa sovellusta. Web sovellus on myös nopea ja se on käyttäjän käytettävissä ilman erillistä sovelluksen lataamista. Tämä lisää helppokäyttöisyyttä. Sovellus taipuu myös erittäin hyvin websovellukseksi ilman suurempia innovaatioita.  

Websovelluksen huono puoli on hitaampi käytön aloittaminen verrattuna mobiilisovellukseen. Käyttäjän tulee ensin käynnistää webselain, siirtyä sovelluksen url-osoitteeseen ja kirjautua sisään järjestelmään ennen käytön aloittamista, kun mobiilisovelluksessa vastaava toimenpide olisi vain sovelluspainikkeen klikkaaminen.  

Myös aika tulee olemaan haasteena näin laajan suunnitelman toteuttamiseen. Ajankäyttö täytyy suunnitella fiksusti, jotta saadaan oikeita asioita aikaan.  

### 2. Mobiiliaplikaatio

#### 1. Toteutusympäristö

Mobiiliaplikaatio voidaan luoda suunnitellun, MEAN-teknologiapinolla (Mongo, Express, Angular ja Node) tehdyn web-sovelluksen pohjalta, eli web-sovellus tullaan muuntamaan esim. Ionicin avulla mobiililaitteille soveltuvaksi. Mobiiliaplikaatiota luotaessa tulee huomioida sen soveltuvuus eri käyttöjärjestelmille sekä miettiä, mistä sovelluksen pystyy lataamaan puhelimelle  (Google Play, App Store, omat verkkosivut). 

Toinen mahdollinen lähestymistapa on aloittaa sovelluksen luonti puhtaasti mobiiliversio edellä ja hyödyntää web-sivua ainoastaan sovelluksen markkinointi- ja infosivuna.  

Kolmantena vaihtoehtona on kääntää web sovelluksesta progressiivinen web sovellus eli PWA-sovellus. Tämän sovelluksen voisi ladata Lintukoto projektin internet sivuilta. PWA-sovellus kääntyy websovelluksesta helposti ja se poistaa mobiilikäyttäjillä suurimman web sovelluksen ongelman eli sivustolle navigoimiseen kuluvan ajan ja vaivan. 

#### 2. Toteutettavat kertomukset

Kaikilla yllämainituilla teknologioilla saadaan suunnitellut kertomukset toteutettua.   

#### 3. Työmääräarviot

Mikäli matkapuhelimella tai tabletilla toimiva sovellus luodaan web-sovelluksen pohjalta, sen vaatima työmäärä on huomattavasti pienempi kuin puhtaan mobiiliversion luonti. Syksyllä 2019 käydyssä “Web-sovellluskehitys”- opintojaksossa teimme tekemästämme sovelluksesta mobiiliapplikaation, eli perustieto aiheesta löytyy ryhmäläisiltämme jo.  

Puhtaan mobiilisovelluksen luomisesta ryhmällä ei ole kokemusta, eli sen vaatima työmäärä tulee oletettavasti olemaan suurempi. Tämä sisältäisi mm. uusien teknologioiden kartoittamista sekä niiden käytön opettelua. 

#### 4. Pros & Cons

Saamme perustiedot ja -taidot siitä, mitä toimivan mobiilisovelluksen tekeminen käytännössä vaatii. 

Mobiiliapplikaation etu on helppokäyttöisyys, käytännöllisyys ja käytön nopeus. 

Natiivin mobiiliaplikaation haitta on se, että toteuttamiseen vaadittava työmäärä on arviomme mukaan liian suuri kurssilla toteutettavaksi, sillä se vaatisi kokonaan uusiin teknologioihin perehtymistä ja niiden opettelua. 

## Yhteenveto

Lintukoto-sovellus on hyvin mukautuvainen ja skaalautuva sovellus. Sen toiminnan voi pelkistetysti ajatella olevan kalenteri ja muistilaput samassa paikassa. Laajemmin ajateltuna sovellus on työkalu, jolla opiskelija hallitsee arkeaan ja samalla etenee opinnoissaan. Tästä on varmasti apua henkilöille, joilla on vaikeuksia pysyä aikatauluissa ja tehdä määrättyjä tehtäviään sekä tietenkin jo valmiiksi järjestelmällisille henkilöille tukemaan tätä prosessia. 

Mikäli integraatio esim. Optimaan sekä Asioon/Peppiin onnistuu ilman suuria haasteita, Lintukoto-sovellusta voi hyödyntää entistäkin laajemmin opiskelun hallintaan. Tuntitehtävät sekä ryhmätyöt voisivat päivittyä suoraan sovellukseen niiden julkaisun jälkeen, eikä tehtävien ajan tasalla pitäminen vaatisi enää aktiivista opiskelijaa. Sovelluksen avulla voidaan siis lisätä opiskelijoiden sosiaalista vuorovaikutusta ryhmän kesken, kenenkään ei tarvitse jäädä yksin tekemään koulutehtäviään, jos ei niin halua.  Sovelluksen perustoimintaa voidaan jatkokehittää ja sitä voidaan muokata palvelemaan myös peruskouluja sekä erilaisia projektimuotoisia työelämä hankkeita, joissa on paljon huomioitavia, aikatauluun sidottuja “liikkuvia osia”. 

Toteutustapanamme käytämme progressiivista websovellusta, sillä se skaalautuu monille laitteille ja on tärkeää, että järjestelmään on pääsy myös mobiililaitteiden lisäksi perinteistä tietokonetta käyttäen. Tietokantana toimisi MongoDB, sillä vaikka sovellus sisältääkin kirjautumisen, tiedon eheyttä voidaan parantaa käyttämällä tarkoitukseen sopivaa kirjastoa (kuten mongoose). Palvelinpuolella käyttäisimme Express-sovelluskehystä, koska kaikki ryhmäläiset ovat tutustuneet siihen web-sovelluskehitys 1 -kurssilla. Tavoitteena on myös tehdä projektin aikana toimivat web-sivut sekä kartoittaa Lintukoto-sovelluksen liiketoiminnallisia ja kaupallisia mahdollisuuksia.  
