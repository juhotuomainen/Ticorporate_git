import { Component, OnInit, Output } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { YhteysAPIService } from "../yhteys-api.service";
import { Muistiinpano } from "../muistiinpano.model";
import { DragAndDrop } from "@syncfusion/ej2-angular-schedule";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { KurssiService } from "./kurssi.service";
import { ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-aktiiviset-kurssit",
  templateUrl: "./aktiiviset-kurssit.component.html",
  styleUrls: ["./aktiiviset-kurssit.component.css"],
  providers: [ModalComponent, NgbModal],
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
  tehtava;
  arvo;
  tunnus = localStorage.user;
  suoritettuKurssiNimi;
  @Output() kurssit2: Array<any> = [];
  @Output() kurssit3: Array<any> = [];
  constructor(
    private yhteysAPI: YhteysAPIService,
    private modalService: NgbModal,
    private kurssiService: KurssiService,
    private route: ActivatedRoute
  ) {}

  // Tehtavan valmiiksi merkkaus

  tehtavaValmis(tehtava, kurssi, tunnus) {
    this.kurssiService.tehtavaTehty(tehtava, kurssi, tunnus);
  }

  // SEURAAVAT 6 FUNKTIOITA AVAA JA SULKEE ERI MODALEITA

  showModal2(): void {
    $("#myModal2").modal("show");
  }
  showUusiModal(): void {
    $("#UusiKurssi").modal("show");
  }
  sendModal2(): void {
    this.hideModal2();
  }
  hideModal2(): void {
    document.getElementById("close-modal2").click();
  }

  kurssiSuoritettuh(kurssi, tunnus) {
    this.kurssiService.kurssiOnSuoritettu(kurssi, tunnus);
  }

  openKurssiSuoritettu(content, kurssi) {
    this.modalContent = kurssi;
    this.suoritettuKurssiNimi = kurssi;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  open(content, kurssi) {
    this.modalContent = kurssi;
    this.tehtava = kurssi;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  open2(content, otsikko, muistiinpano, kurssi) {
    this.muistiinpano2 = muistiinpano;
    this.otsikko = otsikko;
    this.otsikkoUusi = otsikko;
    this.kurssi = kurssi;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  // MUISTIINPANON POISTO
  // suljetaan modal ja kutsutaan kurssiServicen poistaMuistiinpano funktiota, joka poistaa
  // muistiinpanon tietokannasta.

  poistamp() {
    document.getElementById("muistiinpano-close-nappi").click();
    document.getElementById("sulkunappi").click();
    location.reload(true);

    this.kurssiService.poistaMuistiinpano(
      this.otsikko,
      this.kurssi,
      this.tunnus
    );
  }

  // Modalin avaus

  avaa(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  muistiinpano: Array<Muistiinpano>;

  // funktio hakee ja palauttaa kurssikoodit kurssit2 taulukosta.

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

  loggaus = function () {
    console.log(this.kurssiTaulukko);
    console.log(this.kurssit2[0]);
  };

  // hakee muistiinpanot kannasta

  haeMuistiinpanot = () => {
    for (let kurssi of this.kurssit2) {
      this.yhteysAPI
        .getSingleMuistiinpano(kurssi.Kurssikoodi)
        .subscribe((data) => kurssi.muistiinpanot.push(data));
    }
  };

  // Hakee käyttäjän kurssin kannasta

  haeKurssit = (tunnus) => {
    this.yhteysAPI
      .getKurssit(tunnus)
      .subscribe((data) => this.kurssit2.push(data));
    console.log(this.kurssit2);
  };

  // Hakee kaikki saatavilla olevat kurssit kannasta

  haeKaikkiKurssit = () => {
    this.yhteysAPI.getKaikkiKurssit().subscribe((data) => {
      this.kurssit3.push(data);
    });
  };

  ngOnInit() {
    this.haeMuistiinpanot();
    this.haeKurssit(this.tunnus);
    this.haeKaikkiKurssit();
  }
}
