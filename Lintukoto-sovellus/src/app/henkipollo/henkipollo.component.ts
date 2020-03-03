import { Component, OnInit } from "@angular/core";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
@Component({
  selector: "app-henkipollo",
  templateUrl: "./henkipollo.component.html",
  styleUrls: ["./henkipollo.component.css"]
})
export class HenkipolloComponent implements OnInit {
  constructor(public router: Router) {}
  sivu = 1;
  ngOnInit() {
    this.randomLause();
  }

  hideModal(): void {
    document.getElementById("close-modal").click();
  }
  hideModalqotd(): void {
    document.getElementById("close-modalqotd").click();
  }
  hideModalsivu(): void {
    document.getElementById("close-modalsivu").click();
  }

  //henkipöllön päivänlauseet
  paivanLauseet = [
    "Pään hakkaaminen seinään kuluttaa 150 kaloria tunnissa.",
    "Käärmeet pystyvät ennustamaan maanjäristyksiä.",
    "7% amerikkalaisista aikuisista luulee suklaamaidon tulevan ruskeista lehmistä.",
    "Jos nostat kengurun hännän ilmaan, se ei voi hyppiä.",
    "Pukit virtsaavat itsensä päälle vetääkseen naaraita puoleensa.",
    "Frisbeen kehittäjä tuhkattiin ja tuhkat muutettiin frisbeeksi.",
    "Tuotat elämäsi aikana tarpeeksi sylkeä täyttääksesi kaksi uima-allasta.",
    "Jääkarhut pystyisivät syömään 86 pingviiniä yhdellä syömiskerralla.",
    "Sydänkohtaukset ovat todennäköisimpiä maanantaisin.",
    "Tennis pelaajat eivät saa kiroilla pelatessaan Wimbledonissa.",
    "Useampi ihminen kuolee nykyään ottaessaan selfieitä, kuin haiden hyökkäyksissä",
    "Leijonan karjaisun voi kuulla jopa 8 kilometrin päästä",
    "Saint Lucia on ainut valtio, joka on nimetty naisen mukaan.",
    "USA:n laivasto käyttää Xbox-ohjaimia periskooppejen ohjaamiseen.",
    "Mustekala on syntyessään kirpun kokoinen.",
    "Noin 48% Ugandan asukkaista on alle 15-vuotiaita.",
    "Keskiverto mies kyllästyy shoppailuun 26 minuutissa.",
    "Yhden lasipurkin kierrättäminen säästää tarpeeksi energiaa katsoaksesi kolme tuntia televisiota.",
    "Facebook, Instagram ja Twitter ovat kaikki kiellettyjä Kiinassa",
    "Bob Dylanin oikea nimi on Robert Zimmerman.",
    "Pieni lapsi pystyisi uimaan sinivalaan verisuonissa.",
    "Eiffelin tornissa on 1710 porrasta.",
    "Twitter-linnun nimi on Larry",
    "Mike Tyson yritti maksaa 10 000 dollaria eläintarhan työntekijälle saadakseen tapella gorillan kanssa.",
    "Ensimmäinen herätyskello soi pelkästään neljältä aamuyöstä.",
    "Keskiverto ihminen kävelee viisi kertaa maapallon ympäri elämässään.",
    "George W.Bush oli nuorempana cheerleader.",
    "Perus flunssa on alunperin tullut kameleista.",
    "Ketsuppia käytettiin lääkkeenä 1800-luvun alussa.",
    "Keskimäärin ihmisellä on alle kaksi silmää.",
    "Vain 5% meristä on tutkittu.",
    "Rypäleet ovat myrkyllisiä koirille ja kissoille",
    "Kanat ovat T-Rexin lähinnä eläviä sukulaisia.",
    "Miehet ovat 23% todennäköisemmin vasenkätisiä, kuin naiset",
    "Pohjois-Koreassa ja Kuubassa ei myydä Coca-Colaa.",
    "Ainoastaan kolme valtiota maailmassa eivät käytä metristä järjestelmää.",
    "Joka kahdessadas ihminen on suora jälkeläinen Genghis Khanille.",
    "Volkswagenin myydyin tuote on makkara.",
    "Maailman tappavin eläin on hyttynen."
  ];
  //tämä näytetään sivulla {{lause}}
  lause;
  //ottaa random lauseen arraysta aina kun kutsutaan
  randomLause() {
    this.lause = this.paivanLauseet[
      Math.floor(Math.random() * this.paivanLauseet.length)
    ];
  }
}
