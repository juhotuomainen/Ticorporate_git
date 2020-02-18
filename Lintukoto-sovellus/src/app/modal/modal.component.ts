import { Component, OnInit, Input } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { YhteysAPIService } from "../yhteys-api.service";
import { Muistiinpano } from "../muistiinpano.model";

declare var $: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  kurssiTaulukko: Array<Muistiinpano> = [];

  @Input() kurssit2: [];

  constructor(private yhteysAPI: YhteysAPIService) {}

  ngOnInit() {
    this.yhteysAPI
      .getMuistiinpano()
      .subscribe(data => (this.kurssiTaulukko = data));
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
    document.getElementById("close-modal-teht").click();
  }
}
