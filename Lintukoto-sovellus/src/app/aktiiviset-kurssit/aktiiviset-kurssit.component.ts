import { Component, OnInit, Output } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { YhteysAPIService } from "../yhteys-api.service";
import { Muistiinpano } from "../muistiinpano.model";
import { DragAndDrop } from "@syncfusion/ej2-angular-schedule";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { KurssiService } from "./kurssi.service";
import { Router, NavigationEnd } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-aktiiviset-kurssit",
  templateUrl: "./aktiiviset-kurssit.component.html",
  styleUrls: ["./aktiiviset-kurssit.component.css"],
  providers: [ModalComponent, NgbModal]
})
export class AktiivisetKurssitComponent implements OnInit {
  navigationSubscription;
  kurssiTaulukko: Array<Muistiinpano> = [];
  modalContent: any;
  muistiinpano2;
  otsikko;
  otsikkoUusi;
  kurssi;
  value;
  arvo;
  tunnus = localStorage.user;
  @Output() kurssit2: Array<any> = [];
  @Output() kurssit3: Array<any> = [];
  constructor(
    private yhteysAPI: YhteysAPIService,
    private modalService: NgbModal,
    private kurssiService: KurssiService,
    private router: Router
  ) {}

  showModal2(): void {
    $("#myModal2").modal("show");
  }
  showUusiModal(): void {
    $("#UusiKurssi").modal("show");
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

  open2(content, otsikko, muistiinpano, kurssi) {
    //this.modalContent = content;
    this.muistiinpano2 = muistiinpano;
    this.otsikko = otsikko;
    this.otsikkoUusi = otsikko;
    this.kurssi = kurssi;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  poistamp() {
    document.getElementById("sulkunappi").click();
    // location.reload(true);

    this.kurssiService.poistaMuistiinpano(
      this.otsikko,
      this.kurssi,
      this.tunnus
    );
    this.router.navigate(["/aktiiviset"]);
  }

  avaa(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
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
  lisaaKurssi() {}

  loggaus = function() {
    console.log(this.kurssiTaulukko);
    console.log(this.kurssit2[0]);
  };

  haeMuistiinpanot = () => {
    for (let kurssi of this.kurssit2) {
      this.yhteysAPI
        .getSingleMuistiinpano(kurssi.Kurssikoodi)
        .subscribe(data => kurssi.muistiinpanot.push(data));
    }
  };

  haeKurssit = tunnus => {
    this.yhteysAPI
      .getKurssit(tunnus)
      .subscribe(data => this.kurssit2.push(data));
    console.log(this.kurssit2);
  };

  haeKaikkiKurssit = () => {
    this.yhteysAPI.getKaikkiKurssit().subscribe(data => {
      this.kurssit3.push(data);
      console.log(data);
    });
    console.log("KURSSIT 3 !!!! !!!!! !!!! -> " + this.kurssit3);
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
    this.haeKurssit(this.tunnus);
    this.haeKaikkiKurssit();
    console.log(this.tunnus + "testaushommia!!!!!!!!!");
  }
}
