import { Component, OnInit } from "@angular/core";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { HenkipolloinfoComponent } from "../henkipolloinfo/henkipolloinfo.component";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-henkipollo",
  templateUrl: "./henkipollo.component.html",
  styleUrls: ["./henkipollo.component.css"]
})
export class HenkipolloComponent implements OnInit {
  constructor() {}
  
  
  ngOnInit() {}

  hideModal(): void {
    document.getElementById("close-modal").click();
  }
}

