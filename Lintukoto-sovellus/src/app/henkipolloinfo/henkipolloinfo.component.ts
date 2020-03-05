import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-henkipolloinfo',
  templateUrl: './henkipolloinfo.component.html',
  styleUrls: ['./henkipolloinfo.component.css']
})
export class HenkipolloinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  hideModal(): void {
    document.getElementById("close-modal").click();
  }
}
