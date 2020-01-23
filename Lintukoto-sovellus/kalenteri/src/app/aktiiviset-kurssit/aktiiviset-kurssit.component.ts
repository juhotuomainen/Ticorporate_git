import { Component, OnInit } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-aktiiviset-kurssit",
  templateUrl: "./aktiiviset-kurssit.component.html",
  styleUrls: ["./aktiiviset-kurssit.component.css"]
})
export class AktiivisetKurssitComponent implements OnInit {
  title = "Aktiiviset kurssit";
  kurssit: Array<Object> = [
    {
      Kurssikoodi: "X301",
      nimi: "Web sovelluskehitys",
      kuva: "../../assets/images/orsipollo4.png"
    },
    {
      Kurssikoodi: "X302",
      nimi: "Tietokannat",
      kuva: "../../assets/images/home.png"
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli.png"
    },
    {
      Kurssikoodi: "X304",
      nimi: "Web-liiketoiminta",
      kuva: "../../assets/images/pollomalli3.0_surullinen.png"
    }
  ];

  //showModal(): void {
  // this.displayService.setShowModal(true);
  // communication to show the modal, I use a behaviour subject from a service layer here
  //}

  constructor() {}

  ngOnInit() {}
}
