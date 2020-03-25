# Projektisuunnitelma

- [Projektisuunnitelma](#projektisuunnitelma)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Projektin sisältö](#projektin-sis%c3%a4lt%c3%b6)
    - [Johdanto](#johdanto)
    - [Projektin tausta ja tavoitteet](#projektin-tausta-ja-tavoitteet)
    - [Tuotokset](#tuotokset)
    - [Projektin hyväksyminen](#projektin-hyv%c3%a4ksyminen)
  - [Toimintasuunnitelma](#toimintasuunnitelma)
    - [Käytetty prosessi](#k%c3%a4ytetty-prosessi)
    - [Projektin aloittamisesta](#projektin-aloittamisesta)
    - [Projektin toteuttamisesta](#projektin-toteuttamisesta)
    - [Projektin testaamisesta](#projektin-testaamisesta)
    - [Projektin lopettamisesta](#projektin-lopettamisesta)
  - [Projektin resurssit](#projektin-resurssit)
    - [Projektin organisaatio](#projektin-organisaatio)
    - [Ohjaajat](#ohjaajat)
    - [Työkalut](#ty%c3%b6kalut)
  - [Aikataulu](#aikataulu)
  - [Raportointi ja kommunikointi](#raportointi-ja-kommunikointi)
    - [Sisäinen raportointi](#sis%c3%a4inen-raportointi)
    - [Ohjaajaraportointi](#ohjaajaraportointi)
    - [Viikkopalaverikäytäntö/Daily Scrum](#viikkopalaverik%c3%a4yt%c3%a4nt%c3%b6daily-scrum)
    - [Kommunikointitavat](#kommunikointitavat)
  - [Dokumentointi](#dokumentointi)
    - [Dokumenttipohjat](#dokumenttipohjat)
    - [Dokumenttien hallinta](#dokumenttien-hallinta)
  - [Riskien hallinta](#riskien-hallinta)
  - [Avoimet asiat](#avoimet-asiat)

## Projektin tiedot

<Lintukoto>

Tekijät:
Siina Kaakinen
Annika Manninen
Henri Parviainen
Juho Tuomainen
Rasmus Savolainen
Tuukka Neijonen

### Termit ja lyhenteet

| Termi    | Kuvaus                                                    |
| -------- | --------------------------------------------------------- |
| GIT      | Versionhallintajärjestelmä                                |
| GitHub   | Palvelu joka on rakennettu GIT versionhallinnan ympärille |
| Markdown | Merkkauskieli                                             |
| HLTP     | High Level Test Plan                                      |

### Viitteet

| Viittaus | Materiaali                        |
| -------- | --------------------------------- |
| HTLP     | <linkki hltp dokumenttiin>       |

## Projektin sisältö

### Johdanto

Projektina on tehdä websovellus, jonka tavoitteena on helpottaa opiskelijoiden ajanhallintaa visualisoimalla opiskelijan ajankäyttö ja opintojaksot. Tässä dokumentissa käydään läpi projektin vaiheet, sekä resurssit ja toimintamallit, joita tässä projektissa käytetään. 

### Projektin tausta ja tavoitteet

Tavoitteenamme on toteuttaa mahdollisimman hyvä, selkeä ja helppokäyttöinen web sovellus, joka toimisi opiskelijan arjessa apuna ajanhallinnassa. Web sovelluksessa tulee olemaan viisi erilaista näkymää: kalenteri-, tehtävälista-, aktiiviset kurssit-, suoritetut kurssit sekä kauppa näkymä.  

Fyysisten toteutettavien tavoitteiden lisäksi projektin oppimistavoitteena on oppia SCRUM käytänteitä, sekä projektin hallintaa ja ryhmätyötaitoja. Lisäksi koodareiden oppimistavoitteena on syventää osaamista Angular, MongoDB, NodeJS ja Express teknologioissa. Liiketoimintavastuullisten tavoitteena on oppia projektin kokonaisvaltaisesta liiketoiminnasta sekä ymmärtää ja hahmottaa, mitä erityispiirteitä websovelluksiin liittyvässä liiketoiminnassa on.  

### Tuotokset



- Projektisuunnitelma
- Esitutkimus
- Liiketoimintasuunnitelma
- Spring backlog
- HLTP
- Scrum-dokumentaatio
- Prototyyppi toimivasta Lintukoto-sovelluksesta (kts. projektin hyväksyminen)
- Esitys projektista demo-päiville (yht. 3 kpl)
- Projektisopimus

### Projektin hyväksyminen

Projekti on saavuttanut Definition of Done’n (DoD) kun toimiva websovellus on valmis 
ja siitä löytyvät seuraavat ominaisuudet: 
- Sisään- ja uloskirjautumistoiminnot
- Kalenterinäkymä
- Omien kalenteri-eventtien lisääminen ja poistaminen
- Tehtävien siirtyminen tehtävälista näkymään
- Aktiiviset kurssit näkymä (Pöllöorsi)
- Suoritetut kurssit näkymä (Albumi)

Lisäksi definition of done vaatii, että kaikki kurssilta vaadittavat raportit ja dokumentit on tehty. 

## Toimintasuunnitelma

### Käytetty prosessi
Käytämme ketterien menetelmien scrumia. Scrum on projektinhallintaan tarkoitettu viitekehys, jossa koko tiimi toimii tiiviissä yhteistyössä yhteisen projektin edistämiseksi.  

Annika toimii projektimme scrum masterina. Hän valvoo, että prosessia noudatetaan. Prosessimme alkaa suunnittelupäivällä, jossa kokoamme yhteen paikkaan (product backlog) kaiken mitä pitää saada aikaan. Suunnitelmamme tehtävät muovaamme käyttäjäkertomuksiksi (user story) jotka pisteytämme (story points) niiden haastavuuden mukaan. Käyttämämme pisteytysskaala on 1-5, jossa 1 tarkoitta vähäistä työmäärää ja 5 merkittävää työmäärää. 

Työskentely suoritetaan kahden viikon sykleissä eli sprinteissä. Työpäivinä, ma-pe, pidämme daily scrum tapaamisen joka päivä klo 10:00 (mahdollisista poikkeuksista sovitaan tapauskohtaisesti), jossa jokainen kertoo mitä on tehnyt, mitä aikoo tehdä ja missä on ollut haasteita.  

Jokaisen sprintin päätteeksi pidämme loppupalaverin (retrospektiivi), jossa käymme ryhmässä läpi kuluneen sprintin. Palaverissa peilaamme sprintin tapahtumia suunnittelupäivän suunnitelmiin ja arvioimme, saavutimmeko asetetut tavoitteet. Analysoimme myös, mikä vaikutti tuloksen muotoutumiseen. Tämän lisäksi valitsemme valitsemaan erityisen kehittämisen kohteen seuraavan sprintin ajaksi. 

### Projektin aloittamisesta
Aloitimme projektin työstämisen esituotanto-vaiheella, jonka aikana tuotimme projektisuunnitelman, esitutkimuksen sekä High level test planin (HLTP)projektistamme. Nämä julkaistiin projektimme Githubissa md-formaatissa. Varsinaisen työskentelyn ja ensimmäisen sprintin alkamisajankohta on näiden dokumenttien hyväksymisen jälkeen. Hyväksynnästä vastaavat opintojakson “labramestarit” Teemu Pölkki / Jukka Riikonen. 
Ennen tuotantovaihetta rakensimme lisäksi projektillemme toimivan Git- sekä Zenhubin. Kävimme myös täydentyneen projektiryhmän kanssa läpi projektimme vision, kartoitimme projektiryhmämme kiinnostukset eri työtehtäviä kohtaan sekä sovimme alustavasti roolijaon ryhmäläisten kesken. 

### Projektin toteuttamisesta
Projektimme työstäminen tapahtuu TiCorporate-opintojakson aikana keväällä 2020. Projekti päättyy toukokuussa pidettävään demoesitykseen, jossa esittelemme sovelluksemme ja sen toiminnan käytännössä. Dokumentoimme projektin etenemisen riittävällä laajuudella tuotannon edetessä. Koska projektiryhmämme on suht suuri (kuusi henkilöä) tavoitteenamme on toimia ryhmänä niin, että jokaisella työtehtävällä (ohjelmointi, testaus, sisällöntuotanto, liiketalous) on vähintään kaksi suorittajaa, jotka sparraavat, neuvovat ja tsemppaavat toisiaan. Tarvittaessa koko ryhmä auttaa esille nousseen ongelman ratkaisemisessa. 

### Projektin testaamisesta
Projektin testaaminen perustuu esituotanto-vaiheessa luotuun HLTP:n, jota täydennämme projektin edetessä. Sovellusta testaamalla pyrimme minimoimaan siinä olevat viat ja häiriöt sekä poistamaan yhteensopivuudessa ilmenevät haasteet ja ongelmat. Sovelluksen testaamista tullaan tekemään läpi koko kevään pääosin testaajien (Savolainen ja Tuomainen) voimin. Muu projektiryhmä osallistuu tähän tarvittaessa.  

### Projektin lopettamisesta
Projekti lopetetaan opintojakson päättymiseen toukokuussa 2020. 

## Projektin resurssit
- Kuuden hengen tiimi, joista jokainen käyttää projektiin noin 480 h eli yhteensä noin 2 880 työtuntia neljän kuukauden aikana.
- Mahdollinen käyttäjiltä saatu palaute ja kehittämisehdotukset projektin ulkopuolisilta tahoilta.
- Digi & Game Centerin tilat ovat käytettävissämme tarjoten työkaluja ja JAMK tarjoaa ohjausta

### Projektin organisaatio


| Nimi              | Rooli(t)                       | Yhteystiedot           |
| ----------------  | ------------------------------ | ---------------------- |
| Kaakinen Siina    | Product Owner (PO), ohjelmoija | M2936@student.jamk.fi  |
| Manninen Annika   | Scrum Master (SM), liiketalous | M2391@student.jamk.fi  |
| Neijonen Tuukka   | Sisällöntuotanto               | M2493@student.jamk.fi  |
| Parviainen Henri  | Ohjelmoija, sisällöntuotanto   | M2456@student.jamk.fi  |
| Tuomianen Juho    | Ohjelmoija, testaaja           | M3541@student.jamk.fi  |
| Savolainen Rasmus | Ohjelmoija, testaaja           | M1979@student.jamk.fi  |


### Ohjaajat

| Nimi               | Rooli(t)     | Yhteystiedot               |
| ------------------ | ------------ | -------------------------- |
| Teemu Pölkki       | Labramestari | teemu.polkki@jamk.fi       |
| Jukka Riikonen     | Labramestari | h9301@student.jamk.fi      |
| Niko Kiviaho       | Opettaja     | niko.kiviaho@jamk.fi       |
| Riikka Ahlgren     | Opettaja     | riikka.ahlgren@jamk.fi     |
| Tommi Tuikka       | Opettaja     | tommi.tuikka@jamk.fi       |
| Ilari Miikkulainen | Opettaja     | ilari.miikkulainen@jamk.fi |



### Työkalut

Projektilla on käytössä GitHub ja ZenHub palvelut, joilla toteutetaan projektihallinta. Käytämme projektin kuvitukseen Adobe Photoshopia, tarvittaessa Adobe Illustratoria ja sovelluksen muun ulkoasun toteutamme Angularin ulkoasutoimintojen kautta (CSS, Bootstrap jne). Koodin kirjoitamme Visual Studio Coden avulla. Tarvittaessa muut ohjelmat tekemisen tueksi. 

Projektin jokainen osallistuja vastaa itse tarvitsemistaan työ- ja apuvälineistä (tietokoneet, pistenäytöt jne.).
Lisäksi projektin käyttämiin työkaluihin kuuluu ohjaajan tarjoamat valmiit pohjat projektisuunnitelmalle, esitutkimukselle, pöytäkirjoille, sekä raporteille ja palavereille.  

## Aikataulu



| Palaveri        | Päiväys    | Osanottajat                                    |
| ----------------| ---------- | ---------------------------------------------- |
| Planning day    | 20.1.2020  | Projektiryhmä, ohjaajat                        |
| Viikkopalaveri  | 24.1.2020  | Projektiryhmä                                  |
| Viikkopalaveri  | 31.1.2020  | Projektiryhmä                                  |
| Retrospektiivi  | 31.1.2020  | Projektiryhmä                                  |
| Planning day    | 3.2.2020   | Projektiryhmä, ohjaajat                        |
| Viikkopalaveri  | 7.2.2020   | Projektiryhmä                                  |
| Viikkopalaveri  | 14.2.2020  | Projektiryhmä                                  |
| Retrospektiivi  | 14.2.2020  | Projektiryhmä                                  |
| Planning day    | 17.2.2020  | Projektiryhmä, ohjaajat                        |
| DEMO 1          | 20.2.2020  | Projektiryhmä, ohjaajat, kaikki kiinnostuneet  |
| Viikkopalaveri  | 21.2.2020  | Projektiryhmä                                  |
| Viikkopalaveri  | 6.3.2020   | Projektiryhmä                                  |
| Retrospektiivi  | 6.3.2020   | Projektiryhmä                                  |
| Planning day    | 9.3.2020   | Projektiryhmä, ohjaajat                        |
| Viikkopalaveri  | 13.3.2020  | Projektiryhmä                                  |
| Viikkopalaveri  | 20.3.2020  | Projektiryhmä                                  |
| Retrospektiivi  | 20.3.2020  | Projektiryhmä                                  |
| Planning day    | 23.3.2020  | Projektiryhmä                                  |
| Viikkopalaveri  | 27.3.2020  | Projektiryhmä                                  |
| DEMO 2          | 2.4.2020   | Projektiryhmä, ohjaajat, kaikki kiinnostuneet  |
| Viikkopalaveri  | 3.4.2020   | Projektiryhmä                                  |           
| Retrospektiivi  | 3.4.2020   | Projektiryhmä                                  |
| Planning day    | 6.4.2020   | Projektiryhmä, ohjaajat                        |
| Viikkopalaveri  | 9.4.2020   | Projektiryhmä                                  |
| Viikkopalaveri  | 17.4.2020  | Projektiryhmä                                  |
| Retrospektiivi  | 17.4.2020  | Projektiryhmä                                  |
| Planning day    | 20.4.2020  | Projektiryhmä, ohjaajat                        |
| Viikkopalaveri  | 24.4.2020  | Projektiryhmä                                  |
| Viikkopalaveri  | 30.4.2020  | Projektiryhmä                                  |
| Retrospektiivi  | 30.4.2020  | Projektiryhmä                                  |
| KONKURSSI       | 8.5.2020   | Projektiryhmä, ohjaajat, kaikki kiinnostuneet  |

## Raportointi ja kommunikointi

### Sisäinen raportointi

Kaikki dokumentointi on GitHubissa projektiin osallistuvien nähtävillä. Tämän lisäksi apuna voidaan myös käyttää sähköpostia, Microsoftin OneDrivea, Microsoft Teamsia sekä WhatsAppia. 

### Ohjaajaraportointi

Sprinttien aikana ScrumMaster koostaa ja toimittaa ohjaajalle viikkoraportin pdf-muodossa perjantaisin iltapäivän aikana sähköpostitse. Projektiryhmä on tarvittaessa yhteydessä ohjaajiin.

### Viikkopalaverikäytäntö/Daily Scrum

Projektin viikkopalaveri pidetään perjantaisin Matarakatu kahdessa. Palaverin aikana selvitetään projektin eteneminen kuluneella viikolla ja suunnitellaan tulevan viikon tavoitteet. Palavereista tehdään pöytäkirja joita säilytetään sekä ryhmän GitHubissa että OneDrivessa.

Daily Scrumit pidetään jokainen työpäivä (ma-pe) klo 10:00. Poikkeuksista sovitaan ryhmän kesken erikseen.
Backlog grooming toteutetaan sprinttien välissä yhdessä keskustellen.

### Kommunikointitavat

Ryhmän jäsenille on luotu WhatsApp-ryhmä. Tämän lisäksi ryhmän jäsenet tapaavat toisiaan joka arkipäivä vähintään kello 10 ja 14 välillä Matarankadulla (poikkeuksista sovitaan henkilökohtaisesti). Lisäksi ryhmä kommunikoi ohjaajien kanssa käytännön asioista Microsoft Teams palvelussa ja sähköpostilla. 

## Dokumentointi



### Dokumenttipohjat

TiCorporaten omat dokumenttipohjat:
- Projektisuunnitelmat
- Esitutkimus
- Liiketoimintasuunnitelma
- HLTP (High Level Test Plan)
- Viikkoraportit
- Viikkopalaverit (Weekly)

### Dokumenttien hallinta

Mallipohjat löytyvät Optimasta. Projektin aikana tehdyt dokumentit sekä niiden versionhallinta toteutetaan GitHubissa sekä OneDrivessa. 
Backupit hoidetaan GitHubin avulla. Projektin dokumentit nimetään selkeästi, jotta kaikki osapuolet voivat vaivattomasti löytää tarvittavat dokumentit. Dokumenttien muokkaus toimii helposti OneDriven avulla. Käytetään yhtenäisiä ohjelmointikäytänteitä, hyödynnetään Prettieriä ja linttereitä.

## Riskien hallinta

Projektiin osallistuvat kertovat havaitsemistaan riskeistä daily scrum-tapaamisissa ja viikkopalavereissa. Havaitut riskit käsitellään yhdessä ja minimoidaan mahdollisuuksien mukaan. Mikäli riskiä ei pystytä oman ryhmän voimin hallitsemaan, konsultoimme ulkopuolista asiantuntijaa auttamaan.


| Riskit                                                         | Todennäköisyys |  Impakti   | Minimointi  |
| -------------------------------------------------------------- | -------------- | ---------- | ------------|
| Työntekijät eivät osaa koodata ja projektia ei saada valmiiksi | Suuri          | Suuri      | Opiskelemme tarvittavat teknologiat |                                                               
| Asion rajapinnan integraatio ei onnistu                        | Pieni          | Keskiverto | Neuvottelemme asian JAMKin kanssa|                                                                   
| Googlen kirjautuminen                                          | Pieni          | Keskiverto | Perehtymällä asiaan, tarvittaessa apua   |      
| Suunniteltuja ominaisuuksia on liikaa ja aikaa liian vähän     | Suuri          | Pieni      | Projekti jako itsenäisesti toimiviin osiin |
| Projektin aikataulu yllättää                                   | Kohtalainen    | Kohtalainen| Tiimi on kartalla, mitä tapahtuu    |  
| Työntekijät uupuvat                                            | Kohtalainen    | Suuri      | Työajan noudatus, riittävä tauoltus     |  

## Avoimet asiat

Konseptin laajuus saattaa muuttua prosessin edetessä.  
Järjestelmien integraatiot ovat vielä auki (Asio muuttuu Pepiksi kevään 2020 aikana). 
TiCorporaten aikana meillä on tavoitteena rakentaa toimiva kalenteri, opintojaksoja ja niiden tilaa osoittavat pöllöt sekä asetukset-sivusto, jossa on sovelluksen toiminnan hallinta. 
