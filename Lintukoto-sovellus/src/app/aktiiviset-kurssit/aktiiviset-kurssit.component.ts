import { Component, OnInit, Output } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { YhteysAPIService } from "../yhteys-api.service";
import { Muistiinpano } from "../muistiinpano.model";
import { DragAndDrop } from "@syncfusion/ej2-angular-schedule";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: "app-aktiiviset-kurssit",
  templateUrl: "./aktiiviset-kurssit.component.html",
  styleUrls: ["./aktiiviset-kurssit.component.css"],
  providers: [ModalComponent, NgbModal]
})
export class AktiivisetKurssitComponent implements OnInit {
  kurssiTaulukko: Array<Muistiinpano> = [];
  modalContent: any;
  value;
  constructor(
    private yhteysAPI: YhteysAPIService,
    private modalService: NgbModal
  ) {}

  showModal2(): void {
    $("#myModal2").modal("show");
  }
  sendModal2(): void {
    // do something here
    this.hideModal2();
  }
  hideModal2(): void {
    document.getElementById("close-modal2").click();
  }

  open(content, kurssi) {
    //this.modalContent = content;
    this.modalContent = kurssi;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  title = "Aktiiviset kurssit";
  muistiinpano: Array<Muistiinpano>;

  kurssihaku() {
    for (let Kurssikoodi in this.kurssit2) {
      if (
        Kurssikoodi.toString() === Object.keys(this.kurssiTaulukko).toString()
      ) {
        return Kurssikoodi;
      }
    }
  }

  loggaus = function() {
    console.log(this.kurssiTaulukko);
    console.log(this.kurssit2[0]);
  };

  kurssit2: Array<any> = [];

  haeMuistiinpanot = () => {
    for (let kurssi of this.kurssit2) {
      this.yhteysAPI
        .getSingleMuistiinpano(kurssi.Kurssikoodi)
        .subscribe(data => kurssi.muistiinpanot.push(data));
    }
  };

  haeKurssit = () => {
    this.yhteysAPI.getKurssit().subscribe(data => this.kurssit2.push(data));
    console.log(this.kurssit2);
  };

  // showModal(): void {
  // this.displayService.setShowModal(true);
  // communication to show the modal, I use a behaviour subject from a service layer here
  // }

  ngOnInit() {
    // this.yhteysAPI
    //   .getMuistiinpano("f344")
    //   .subscribe(data => (this.kurssiTaulukko = data));
    this.haeMuistiinpanot();
    this.haeKurssit();
  }
}
