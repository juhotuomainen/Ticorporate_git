import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asetukset',
  templateUrl: './asetukset.component.html',
  styleUrls: ['./asetukset.component.css']
})
export class AsetuksetComponent implements OnInit {
  asetustiedot;

  constructor() {
  }

  onSubmit(asetukset) {
    // tähän tieto siitä kuinka asetukset tallentuvat
  }

  ngOnInit() {
    }
  }
