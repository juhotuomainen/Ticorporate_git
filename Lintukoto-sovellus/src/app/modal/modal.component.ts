import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { YhteysAPIService } from "../yhteys-api.service";
import { Muistiinpano } from "../muistiinpano.model";
import { AktiivisetKurssitComponent } from "../aktiiviset-kurssit/aktiiviset-kurssit.component";
import { Kurssit } from "../kurssit.model";
import { NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  kurssiTaulukko: Array<Muistiinpano> = [];
  kayttajatunnus = localStorage.getItem("user");
  user;
  virhe;
  @Input() kurssit2: [];
  @ViewChild("f", null) formi: NgForm;

  constructor(private yhteysAPI: YhteysAPIService) {}

  ngOnInit() {
    this.yhteysAPI
      .getMuistiinpano()
      .subscribe(data => (this.kurssiTaulukko = data));
    console.log(this.kurssit2);
    this.user = this.yhteysAPI.getUser();
    console.log(this.user);
    this.kayttajatunnus = localStorage.getItem("user");
    console.log(this.kayttajatunnus);
  }

  showModal(): void {
    $("#myModal").modal("show");
  }
  sendModal(): void {
    this.hideModal();
  }
  hideModal(): void {
    document.getElementById("close-modal").click();
  }
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
  hideTehtavanLisaysModal(): void {
    console.log(this.formi);
    document.getElementById("close-modal-teht").click();
  }
}
