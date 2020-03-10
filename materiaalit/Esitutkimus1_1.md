# Esitutkimus (versio 1.1)

## Sisällysluettelo
- [Esitutkimus (versio 1.1)](#esitutkimus-versio-11)
  - [Sisällysluettelo](#sis%c3%a4llysluettelo)
  - [Projektin tiedot](#projektin-tiedot)
  - [Termit ja lyhenteet](#termit-ja-lyhenteet)
  - [Viitteet](#viitteet)
  - [1. Johdanto](#1-johdanto)
  - [2. Visio](#2-visio)
  - [3. Käyttäjäkertomukset ja tekniset rajoitteet](#3-k%c3%a4ytt%c3%a4j%c3%a4kertomukset-ja-tekniset-rajoitteet)
    - [3.1. Käyttäjäkertomukset](#31-k%c3%a4ytt%c3%a4j%c3%a4kertomukset)
      - [3.1.1. Käyttäjä 1: Opiskelija, joka aloittaa sovelluksen käytön](#311-k%c3%a4ytt%c3%a4j%c3%a4-1-opiskelija-joka-aloittaa-sovelluksen-k%c3%a4yt%c3%b6n)
        - [Yksityiskohdat](#yksityiskohdat)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit)
      - [3.1.2. Käyttäjä 2: Aikataulujen kanssa vaikeuksissa oleva opiskelija](#312-k%c3%a4ytt%c3%a4j%c3%a4-2-aikataulujen-kanssa-vaikeuksissa-oleva-opiskelija)
        - [Yksityiskohdat](#yksityiskohdat-1)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-1)
      - [3.1.3. Käyttäjä 3: Mallioppilas ja aktiivinen harrastaja](#313-k%c3%a4ytt%c3%a4j%c3%a4-3-mallioppilas-ja-aktiivinen-harrastaja)
        - [Yksityiskohdat](#yksityiskohdat-2)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-2)
      - [3.1.3. Käyttäjä 4: Vain todo- ominaisuutta tarvitseva käyttäjä](#313-k%c3%a4ytt%c3%a4j%c3%a4-4-vain-todo--ominaisuutta-tarvitseva-k%c3%a4ytt%c3%a4j%c3%a4)
        - [Yksityiskohdat](#yksityiskohdat-3)
        - [Hyväksymiskriteerit](#hyv%c3%a4ksymiskriteerit-3)
    - [3.2. Tekniset vaatimukset](#32-tekniset-vaatimukset)
      - [3.2.1. Selaimet](#321-selaimet)
      - [3.2.2. Tietoturva](#322-tietoturva)
      - [3.2.3. Skaalautuvuus](#323-skaalautuvuus)
      - [3.2.4.Luotettavuus](#324luotettavuus)
      - [3.2.5. Hallittavuus](#325-hallittavuus)
  - [4. Ratkaisuvaihtoehdot](#4-ratkaisuvaihtoehdot)
    - [4.1. Web-sovellus](#41-web-sovellus)
      - [4.1.1. Toteutusympäristö](#411-toteutusymp%c3%a4rist%c3%b6)
      - [4.1.2. Toteutettavat kertomukset](#412-toteutettavat-kertomukset)
      - [4.1.3. Työmääräarviot](#413-ty%c3%b6m%c3%a4%c3%a4r%c3%a4arviot)
      - [4.1.4. Pros & Cons](#414-pros--cons)
    - [4.2. Mobiiliaplikaatio](#42-mobiiliaplikaatio)
      - [4.2.1. Toteutusympäristö](#421-toteutusymp%c3%a4rist%c3%b6)
      - [4.2.2. Toteutettavat kertomukset](#422-toteutettavat-kertomukset)
      - [4.2.3. Työmääräarviot](#423-ty%c3%b6m%c3%a4%c3%a4r%c3%a4arviot)
      - [4.2.4. Pros & Cons](#424-pros--cons)
  - [5. Yhteenveto](#5-yhteenveto)

## Projektin tiedot

\<Lintukoto>

Tekijät: Annika Manninen, Siina Kaakinen, Rasmus Savolainen, Tuukka Neijonen, Henri Parviainen, Juho Tuomainen

## Termit ja lyhenteet

## Viitteet

## 1. Johdanto

Tämän dokumentin tarkoituksena on tuottaa esitutkimus Lintukoto-sovelluksesta. Lintukoto-sovellus on opiskelijoille tarkoitettu ajanhallintatyökalu, jonka tavoitteena on tukea opiskelijoiden opintojen etenemistä sekä auttaa arjenhallinnassa.  

Luvussa 2 käymme läpi visiomme sovelluksemme taustalla. Luvussa 3 esittelemme sovellukseemme liittyviä käyttäjäkertomuksia erilaisten opiskelijapersoonien avulla. Mahdollisia ratkaisuvaihtoehtoja sovelluksen toteuttamiseen sekä niiden etuja käymme läpi luvussa 4. Dokumentin päättää luku 5, jossa summaamme esitutkimuksemme ja suosittelemme jatkotoimenpiteitä projektillemme. 
 
## 2. Visio

Lintukoto on opiskelijoille tarkoitettu opintojen hallintatyökalu, joka visualisoi opintojaksot ja tukee opiskelijaa ajanhallinnan kanssa. Lintukoto kannustaa opiskelijaa pitämään huolta opintojaksoistaan samalla tavalla kuin hoidetaan virtuaalisia lemmikkejä. Lintukoto myös tukee opiskelijan hyvinvointia ja jaksamista opintojen aikana.   

Lintukoto-sovelluksessa jokainen kurssi esitellään pöllönä. Kaikki lukukauden kurssit visualisoidaan “lintuorreksi”, jossa näkee yhdellä silmäyksellä kaikki sillä hetkellä käynnissä olevat opinnot. Pöllön koko kertoo opintojakson laajuudesta eli kuinka monen opintopisteen arvoinen se on. Mitä enemmän pisteitä  kurssista saa, sitä suurempi pöllö on.   

Opintojaksojen pöllöjä hoidetaan hoitamalla opintoja. Jos opiskelija palauttaa tehtävät ajallaan, käy pakollisilla tunneilla ja hoitaa tentit, hänen pöllönsä voivat hyvin. Lisäksi sovellus palkitsee tehtävänpalautukset pisteillä, joilla voi hankkia "kaupasta" virtuaalisia palkintoja. Niillä voi koristella opintojaksojen pöllöjä. Jos opiskelija ei voi huolehtia kurssin vaatimuksista, myös kurssin pöllö alkaa voida huonosti. Pöllö tokenee, kun kurssille alkaa taas kertyä suorituksia. Kun opintojakso on suoritettu, pöllöstä otetaan kuva ja se tallentuu galleriaan/albumiin. Pöllö itse poistuu orrelta, jotta orsi kuvastaa sillä hetkellä työn alla olevia opintoja. Sovellus tarjoaa muistiinpanojen tekomahdollisuuden kyseiseen kurssiin liittyen esimerkiksi klikattaessa pöllöä. Näin kurssin muistiinpanot ovat löydettävissä aina yhdestä paikasta. Vanhoihin muistinpanoihin jo loppuneilta kursseilta pystyy palaamaan albumin kautta. 

Ajanhallintaan sovellus tarjoaa kalenterin, jonka ympärille kaikki muu sovelluksen toiminta rakentuu. Kalenteriin kootaan kaikkien sen hetkisten opintojaksojen kontaktitunnit, ja opiskelija voi itse lisätä kalenteriin omat kiinteät menonsa kuten harrastukset, työt ym. Lisäksi kalenteriin saadaan lisättyä jokaisen kurssitehtävän palautusajat, tentit jne. Aina kun uusi tehtävänpalautus, läksy tai ryhmätyö nousee kalenteriin, se alkaa ehdotella niiden teolle sopivia ajankohtia. Opiskelija voi sitten hyväksyä niitä, jolloin ne kiinnittyvät opiskelijan lukujärjestykseen. Jos kyseessä on ryhmätyö, kalenterille voi kertoa ketkä kuuluvat kuuluvat ja se vertailee automaattisesti ryhmäläisten kalentereita löytääkseen kaikille avoimet slotit eli ajankohdat ryhmätyön tekemiseen.  

Opiskelijan hyvinvointi otetaan Lintukoto-sovelluksessa huomioon antamalla opiskelijalle oma “henkipöllö”, joka välittää erityisesti juuri opiskelijan hyvinvoinnista. Jos opiskelijan kurssipöllöt eivät voi hyvin, henkipöllö alkaa huolestua opiskelijasta. Henkipöllö saattaa kysellä opiskelijalta kyllä/ei-kysymyksiä kuten “Onko sinulla liikaa kursseja tällä hetkellä?” tai “Oletko vielä motivoitunut opiskelemaan?” ja opiskelijan vastausten perusteella henkipöllö saattaa mm. ehdottaa, että opiskelija olisi yhteyksissä omaan tutoropettajaansa, opinto-ohjaajaan, koulupsykologiin tms. Henkipöllö voi myös auttaa opintojaksojen tehtävien suoritusajankohdan valinnoissa huomioimalla mm. onko opiskelija parhaimmillaan tehtävien tekoon aamuisin vai iltaisin. Henkipöllön on myös tarkoitus muistuttaa opiskelijaa, että tasapainoiseen elämään kuuluu muutakin kuin opiskelu. Henkipöllö toivoo, että opiskelija muistaa nukkua tarpeeksi ja pitää taukoja, tapaa ystäviään ja puhuu tarvittaessa tasapainoisesta ravinnosta ja päihteiden käytön riskeistä. Henkipöllö myös näyttää tarvittaessa kurssin etenemisen (esim. 70 % kurssista tehty) ja kannustaa opiskelijaa ja kiittää hyvästä työstä. Nämä lisätoiminnot ovat sellaisia, joihin paneudutaan jos jää aikaa. 

Kaikista toiminnoista saadaan visuaalinen tapa esittää opiskelijalle tämän opintojen eteneminen ja kehitys ilman, että opiskelija kokee koko opiskeluajan olevan pelkkää suorittamista. Lintukoto opettaa opiskelijalle, kuinka tehtävien tekoon kannattaa varata aikaa ja kannustaa pyytämään apua ajoissa, jos opinnot eivät suju. Jos opiskelija ei kaipaa ylimääräistä visualisointia opintojaksojensa suorittamiseen, Lintukoto-sovelluksen asetuksista voi halutessaan ottaa pois päältä ylimääräisen visualisoinnin. Hän voi karsia asetuksista pois pöllöorren ja kalenterin ehdotteluominaisuudet, jolloin jäljelle jää vain lukujärjestys ja tehtävien suorituslista. Tällöin myöskään ylimääräinen visualisointi ei laske opiskelijan motivaatiota kurssien hoitamiseen. 

## 3. Käyttäjäkertomukset ja tekniset rajoitteet

### 3.1. Käyttäjäkertomukset

#### 3.1.1. Käyttäjä 1: Opiskelija, joka aloittaa sovelluksen käytön

Käyttäjä pääsee kirjautumaan sovellukseen joko Haka- tai Google-tunnuksillaan ja näkee etusivulla oman kalenteri- ja tehtävänäkymänsä. Hän voi käydä omissa käyttäjäasetuksissa päivittämässä tietonsa ja muokkaamassa sovellusta hänelle parhaiten toimivaksi. Otettuaan sovelluksen käyttöön, hänen kurssinsa ilmestyvät pöllöorsi sivulle, jossa käyttäjä näkee yksittäin jokaisen kurssinsa tehtävätilanteen. 

##### Yksityiskohdat

“Olen vasta aloittanut opiskelut ja kaikki tuntuu vielä vieraalta ja jännittävältä. Muutto isompaan kaupunkiin ja oman arjen pyörittäminen vaativat vielä opettelua ja huomaan pyöritteleväni samoja asioita useampaan kertaan päivänaikana ja stressaavani niistä jo etukäteen. Lintukoto-sovelluksen avulla pystyn merkitsemään kalenteriini opiskeluun liittyvien asioiden lisäksi myös arkisia askareita, kuten “maksa laskut ”. Koska sovellus muistuttaa deadlinen lähestymisestä jo hyvissä ajoin, voin keskittyä enemmän arjen pyöritykseen kuin sen murehtimiseen.”   

##### Hyväksymiskriteerit

* Käyttäjä pystyy kirjautumaan sisään jo olemassa olevien (Google/Haka) tunnuksien avulla  

* Käyttäjä pystyy muokkaamaan asetuksista omia tietojaan kuten opintojen alkamispäivää ja sitä onko hän aamu- vai iltaihminen   

* Käyttäjä pystyy asetuksista säätämään, kuinka paljon hän haluaa sovellukselta tukea elämänhallintaan ja haluaako nähdä pöllöhahmoja 

* Käyttäjän kurssit näkyvät omalla sivullaan ja käyttäjä hahmottaa sen sivun avulla kurssiensa tilanteen ja voi tallentaa muistiinpanoja kurssikohtaisesti 

#### 3.1.2. Käyttäjä 2: Aikataulujen kanssa vaikeuksissa oleva opiskelija 

Käyttäjällä on ollut hankaluuksia aikatauluttaa koulussa saatuja tehtäviä. Hän tarvitsee helpon tavan jäsentää, tarkastella ja aikatauluttaa tehtäviään. Muuten hänen kiinnostuksensa ja motivaationsa laskee eikä hän saa tehtäviä hoidettua. Lisämotivaatiota tarjoaa Lintukoto sovelluksen palkitsemisjärjestelmät sekä henkipöllö, joka kehuu ja kiittää onnistuessa ja tukee jos ei onnistu.   

##### Yksityiskohdat

“Minusta on haastavaa saada aikataulutettua opintoja ja vapaa-aikaa. Aloitan usein tekemään koulutöitä liian myöhään ja huomaan, että tehtävät kasaantuvat helposti. Lintukoto sovelluksessa luokkakaverini lisäävät puolestani kaikki koulutehtävät Lintukoto sovelluksen tehtävälistalleni, josta voin helposti siirtää ne omaan kalenteriini. Näin pienet myöhästymiset ja poissaolot koulusta eivät vie pohjaa koko kurssin suoritukselta. Sovellus ehdottaa minulle sopivaa aikaa, jolloin kalenterissani on tilaa tehtävän tekemiselle. Tämä helpottaa huomattavasti aikatauluttamista, sillä näen tehtävälistasta reaaliajassa kaikkien tehtävien deadlinet ja näin ollen tiedän täsmällisesti, kuinka paljon tehtävää on kulloinkin “rästissä”.  
 
Joskus kuitenkin jätän tehtävät silti tekemättä ja tällöin sovelluksen henkipöllö ehdottaa minulle tapaamista opon kanssa, jolloin saan taas opinnon järjestykseen. Tämä auttaa minua pysymään opintojen aikataulussa mukana. On myös mukavaa, kun henkipöllöni kehuu minua, kun saan jotain tehtyä ja se kannustaa myös elämään opiskelujen ulkopuolella. Henkipöllöltä saan myös lisämotivaatiota ja tsemppiä kurssien hoitamiseen ja tykkään tuunata kasvavaa pöllökokoelmaani ja lisätä pöllöille uusia skinejä, kun saan tehtäviä ja kursseja suoritettua.” 

##### Hyväksymiskriteerit 

* Käyttäjä alkaa hahmottamaan opintonsa useasta kurssista (pöllöstä) koostuvaksi kokonaisuudeksi, joista jokainen vaatii oman työpanoksensa 
* Käyttäjä tiedostaa oman aikatauluttamisen merkityksen opinnoissa etenemiseksi.
* Käyttäjä saa tarvittaessa tukea koulun tukiverkosta (esim. opot, tuutorit, psykologi, oppilaitospappi) josta sovelluksen henkipöllö tarvittaessa muistuttaa. 
* Käyttäjä kokee koulutehtävien tekemisen mielekkäämmäksi saatuaan erilaisia palkintoja ja kehuja. Tehtävien suorittamisesta saa pisteitä. 
* Käyttäjä tiedostaa, että myös muu tasapainoinen elämä vaikuttaa jaksamiseen ja motivaatioon. 
* Sovelluksessa on oltava “shop”, josta käyttäjä voi hankkia pisteillään asusteita, ominaisuuksia tai vastaavia pöllöilleen. 

#### 3.1.3. Käyttäjä 3: Mallioppilas ja aktiivinen harrastaja 

Opiskelija hoitaa tehtävänsä ja opinnot huolellisesti. Hän tarvitsee työkalun, jolla voi organisoida opintojaan, jotta voi tehokkaasti ennakoida ja hoitaa tehtävät ajoissa. Hän haluaa myös olla apuna muille oppilaille lisäämällä aina saadut tehtävät järjestelmään. Kurssien vaatimat ryhmätyöt aiheuttavat kuitenkin usein päänvaivaa, koska opiskelijalla on paljon harrastuksia. Tästä syystä kaikille ryhmäläisille sopivia ajankohtia on työlästä sopia. Hän on myös aktiivinen tekemään muistiinpanoja, mutta muistiinpanojen määrä hämmentää häntä joskus, kun hän yrittää löytää jonkin tietyn asian muistiinpanoistaan. Häntä myös ärsyttää, kun kurssialustat sulkeutuvat ja hänen hyvät oppimispäiväkirjansa ym. tehtävänpalautukset eivät ole enää hänen käytettävissään.    

##### Yksityiskohdat

“Tykkään pysyä aina ajan tasalla tehtävistä, jotta voin hoitaa ne alta pois mahdollisimman aikaisessa vaiheessa, jolloin aikaa jää myöhemmin aiheisiin syvällisempään paneutumiseen. Lisään aina tehtävät järjestelmään, kun olen saanut tiedon niistä. Sovellus helpottaa myös aikataulutustani, sillä voin lisätä myös vapaa-ajan harrastukseni kätevästi Lintukoto-kalenteriin. Lisäksi ryhmätöissä Lintukoto vertailee heti kaikkien ryhmäläisten kalentereita, mikä nopeuttaa yhteisten työskentelyajankohtien sopimista. Pidän myös siitä, kuinka voin tallentaa kurssien muistiinpanoni aina kyseisen kurssin alle ja vaikka kurssi päättyisi ja pöllöni siirtyisi arkistoon, pääsen yhä käsiksi tekemiini muistiinpanoihin.“  

##### Hyväksymiskriteerit

* Käyttäjä tuntee merkityksen tunnetta, kun voi auttaa muita opiskelijoita opintojen aikatauluttamisessa.  
* Käyttäjä kokee hallitsevansa opiskelun aikatauluttamista niin, että aikaa jää myös omille harrastuksille.  
* Käyttäjällä on mahdollisuus tehdä muistiinpanoja sovellukseen ja mahdollisuus palata niihin milloin vain.  

#### 3.1.3. Käyttäjä 4: Vain todo- ominaisuutta tarvitseva käyttäjä 

Opiskelija tarvitsee vain jonkin palvelun, josta näkee mitä tehtäviä hänen tulee tehdä. Muut ylimääräiset ominaisuudet eivät kiinnosta häntä ollenkaan. Hän pärjää ilman sovellustakin, mutta arvostaa sitä, että pystyy hallinnoimaan sekä koulu- että työmenot yhdestä paikasta välttäen näin päällekkäiset menot.   

##### Yksityiskohdat

“Minua ei kiinnosta mikään pöllöjen tuunailu. Haluan keskittyä olennaiseen eli siihen, mitä tehtäviä täytyy tehdä ja milloin ne tulee olla tehtynä. Sovelluksesta näen aina suoraan mitä tehtäviä lähiaikoina tulee tehdä ja sen avulla saan hommat hoidettua aina ajoissa. Sovelluksessa oleva ominaisuus, jolla voi piilottaa kaikki pöllöhommat on mielestäni hyvä. En koe tarvitsevani erityistä tukea ja neuvoja elämänhallintaan, varsinkaan henkipöllöltä, hyvin olen pärjännyt tähän saakka ilman ”  

##### Hyväksymiskriteerit

* Opiskelija pystyy merkitsemään kalenteriin, sekä kouluun että muuhun arkeen liittyvät menot  
* Henkipöllön “palvelualttiutta” voidaan säädellä. 
* Kurssipöllöt voidaan piilottaa pois käytöstä asetuksista. 

### 3.2. Tekniset vaatimukset

#### 3.2.1. Selaimet

* Sovelluksen tulee toimia seuraavien selainten uusimmilla versioilla: Mozilla Firefox, Google Chrome, Safari, Microsoft Edge, Brave sekä Opera. 

#### 3.2.2. Tietoturva

* Opiskelija kirjautuu sovellukseen omilla tunnuksillaan ja vain hän pystyy hallinnoimaan esim. Opintojaksojensa tilaa.  
* Sovelluksessa käsitellään henkilötietoja, joten sen tulee olla toteutettu ilman haavoittuvuuksia. Myös GDPR:n asettamat vaatimukset tulee toteutua. Tietoturvakonsultin tulee hyväksyä toteutus. 
* SSL-salausta hyödynnetään sovelluksessa.

#### 3.2.3. Skaalautuvuus

* Sovellus on responsiivinen ja siinä on otettu huomioon saavutettavuus  
WCAG 2.0 standardi huomioiden. 
* Skaalautuu mobiilille (Android ja iOS).
  
#### 3.2.4.Luotettavuus

* Sovelluksen tulee “kestää rasitusta”, eli se ei saa kaatua esim. käyttäjämäärän kasvun myötä.  
* Järjestelmä ei poista/muuta opiskelijan tai hänen kurssiensa tietoja ilman käyttäjän suostumusta. 

#### 3.2.5. Hallittavuus

* Peruspäivitysten tulee voida toteuttaa niin, ettei sovellukseen tule liian pitkiä (useampi tunti) huoltokatkoja.

## 4. Ratkaisuvaihtoehdot

### 4.1. Web-sovellus

#### 4.1.1. Toteutusympäristö

Sovelluksella tulee olemaan eri toiminnallisuuksia (kalenteri, tehtävät sekä virtuaalilemmikit) sekä yhteys tietokantaan ja mahdollisesti integraatio koulun järjestelmän rajapintaan, kuten Asio ja/tai Optima. Tästä rajapinnasta saataisiin lukujärjestyksen oppitunnit. Sovellus toteutetaan käyttäen MEAN-stackia eli frontend toteutetaan Angularilla (koodi tuottaa HTMLää,, käytetään myös JavaScriptiä (JS), TypeScriptiä (TS), CSS), backend puolestaan käyttäen NodeJS ja Express frameworkia ja tietokanta toteutetaan käyttäen MongoDB tietokantaa.  Sovellus on progressiivinen Web-Sovellus (PWA). Hyödynnämme myös AWS-pilveä mahdollisuuksien mukaan. Näiden lisäksi käytämme Google API-kirjastoa, jonka avulla hoidamme kirjautumisen ja Google Analyticsin. Aiomme myös käyttää rajapintaa, joka viestii Asion/Tuudon/Pepin ja sovelluksen välillä.


#### 4.1.2. Toteutettavat kertomukset

Kyseisillä teknologioilla voidaan toteuttaa kaikki suunnitellut kertomukset. Epävarmaa on tässä vaiheessa kuitenkin se, onnistuuko integraatio Asion ja optiman tarjoamiin rajapintoihin.

#### 4.1.3. Työmääräarviot

Suunniteltu Lintukoto sovellus on hyvin skaalautuva, eli sen tarvitsemien työtuntien määrää on hyvin vaikea arvioida vielä suunnittelun tässä vaiheessa. Perus web-sovelluksen tekemiseen arvioimme tässä vaiheessa kuluvan hyvin TiCorporatelle varatun 25 opintopisteen tunnit. 

#### 4.1.4. Pros & Cons

Websovelluksen etuja on skaalautuvuus. Se skaalautuu helposti lähes kaikille laitteille ja täten sovellusta olisi mahdollista käyttää useammalla laitteella. Kun sovellus on helposti saatavilla kaikilla laitteilla, sitä luultavasti tulee myös käytettyä herkemmin, kuin esim. vain mobiilialustoilla toimivaa sovellusta. Web sovellus on myös nopea ja se on käyttäjän käytettävissä ilman erillistä sovelluksen lataamista. Tämä lisää helppokäyttöisyyttä. Sovellus taipuu myös erittäin hyvin websovellukseksi ilman suurempia innovaatioita.  

Websovelluksen huono puoli on hitaampi käytön aloittaminen verrattuna mobiilisovellukseen. Käyttäjän tulee ensin käynnistää webselain, siirtyä sovelluksen url-osoitteeseen ja kirjautua sisään järjestelmään ennen käytön aloittamista, kun mobiilisovelluksessa vastaava toimenpide olisi vain sovelluspainikkeen klikkaaminen.  

Myös aika tulee olemaan haasteena näin laajan suunnitelman toteuttamiseen. Ajankäyttö täytyy suunnitella fiksusti, jotta saadaan oikeita asioita aikaan.  

### 4.2. Mobiiliaplikaatio

#### 4.2.1. Toteutusympäristö

Mobiiliaplikaatio voidaan luoda suunnitellun, MEAN-teknologiapinolla (Mongo, Express, Angular ja Node) tehdyn web-sovelluksen pohjalta, eli web-sovellus tullaan muuntamaan esim. Ionicin avulla mobiililaitteille soveltuvaksi. Mobiiliaplikaatiota luotaessa tulee huomioida sen soveltuvuus eri käyttöjärjestelmille sekä miettiä, mistä sovelluksen pystyy lataamaan puhelimelle  (Google Play, App Store, omat verkkosivut). 

Toinen mahdollinen lähestymistapa on aloittaa sovelluksen luonti puhtaasti mobiiliversio edellä ja hyödyntää web-sivua ainoastaan sovelluksen markkinointi- ja infosivuna.  

Kolmantena vaihtoehtona on kääntää web sovelluksesta progressiivinen web sovellus eli PWA-sovellus. Tämän sovelluksen voisi ladata Lintukoto projektin internet sivuilta. PWA-sovellus kääntyy websovelluksesta helposti ja se poistaa mobiilikäyttäjillä suurimman web sovelluksen ongelman eli sivustolle navigoimiseen kuluvan ajan ja vaivan. 

#### 4.2.2. Toteutettavat kertomukset

Kaikilla yllämainituilla teknologioilla saadaan suunnitellut kertomukset toteutettua.   

#### 4.2.3. Työmääräarviot

Mikäli matkapuhelimella tai tabletilla toimiva sovellus luodaan web-sovelluksen pohjalta, sen vaatima työmäärä on huomattavasti pienempi kuin puhtaan mobiiliversion luonti. Syksyllä 2019 käydyssä “Web-sovellluskehitys”- opintojaksossa teimme tekemästämme sovelluksesta mobiiliapplikaation, eli perustieto aiheesta löytyy ryhmäläisiltämme jo.  

Puhtaan mobiilisovelluksen luomisesta ryhmällä ei ole kokemusta, eli sen vaatima työmäärä tulee oletettavasti olemaan suurempi. Tämä sisältäisi mm. uusien teknologioiden kartoittamista sekä niiden käytön opettelua. 

#### 4.2.4. Pros & Cons

Saamme perustiedot ja -taidot siitä, mitä toimivan mobiilisovelluksen tekeminen käytännössä vaatii. 

Mobiiliapplikaation etu on helppokäyttöisyys, käytännöllisyys ja käytön nopeus. 

Natiivin mobiiliaplikaation haitta on se, että toteuttamiseen vaadittava työmäärä on arviomme mukaan liian suuri kurssilla toteutettavaksi, sillä se vaatisi kokonaan uusiin teknologioihin perehtymistä ja niiden opettelua. 

## 5. Yhteenveto

Lintukoto-sovellus on hyvin mukautuvainen ja skaalautuva sovellus. Sen toiminnan voi pelkistetysti ajatella olevan kalenteri ja muistilaput samassa paikassa. Laajemmin ajateltuna sovellus on työkalu, jolla opiskelija hallitsee arkeaan ja samalla etenee opinnoissaan. Tästä on varmasti apua henkilöille, joilla on vaikeuksia pysyä aikatauluissa ja tehdä määrättyjä tehtäviään sekä tietenkin jo valmiiksi järjestelmällisille henkilöille tukemaan tätä prosessia. 

Mikäli integraatio esim. Optimaan sekä Asioon/Peppiin onnistuu ilman suuria haasteita, Lintukoto-sovellusta voi hyödyntää entistäkin laajemmin opiskelun hallintaan. Tuntitehtävät sekä ryhmätyöt voisivat päivittyä suoraan sovellukseen niiden julkaisun jälkeen, eikä tehtävien ajan tasalla pitäminen vaatisi enää aktiivista opiskelijaa. Sovelluksen avulla voidaan siis lisätä opiskelijoiden sosiaalista vuorovaikutusta ryhmän kesken, kenenkään ei tarvitse jäädä yksin tekemään koulutehtäviään, jos ei niin halua.  Sovelluksen perustoimintaa voidaan jatkokehittää ja sitä voidaan muokata palvelemaan myös peruskouluja sekä erilaisia projektimuotoisia työelämä hankkeita, joissa on paljon huomioitavia, aikatauluun sidottuja “liikkuvia osia”. 

Toteutustapanamme käytämme progressiivista websovellusta, sillä se skaalautuu monille laitteille ja on tärkeää, että järjestelmään on pääsy myös mobiililaitteiden lisäksi perinteistä tietokonetta käyttäen. Tietokantana toimisi MongoDB, sillä vaikka sovellus sisältääkin kirjautumisen, tiedon eheyttä voidaan parantaa käyttämällä tarkoitukseen sopivaa kirjastoa (kuten mongoose). Palvelinpuolella käyttäisimme Express-sovelluskehystä, koska kaikki ryhmäläiset ovat tutustuneet siihen web-sovelluskehitys 1 -kurssilla. Tavoitteena on myös tehdä projektin aikana toimivat web-sivut sekä kartoittaa Lintukoto-sovelluksen liiketoiminnallisia ja kaupallisia mahdollisuuksia.  
