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
    "Tuu koittaa",
    "HOLOLOLO",
    "jees juu moro",
    "opettele pelaa",
    "se on semmosta"
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
