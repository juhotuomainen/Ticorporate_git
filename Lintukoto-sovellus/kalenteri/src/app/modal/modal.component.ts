import { Component, OnInit, Input } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() muistiinpano: string;

  constructor() {}

  ngOnInit() {}
  showModal(): void {
    $("#myModal").modal("show");
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal(): void {
    document.getElementById("close-modal").click();
  }
  showModal2(): void {
    $("#myModal2").modal("show");
  }
  sendModal2(): void {
    //do something here
    this.hideModal2();
  }
  hideModal2(): void {
    document.getElementById("close-modal2").click();
  }
}
