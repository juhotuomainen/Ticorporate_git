import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-asetukset',
  templateUrl: './asetukset.component.html',
  styleUrls: ['./asetukset.component.css']
})
export class AsetuksetComponent implements OnInit {

  constructor(public fb: FormBuilder) {
  }

  kayttaja = {
    ryhmatunnus: '',
    opintopisteet: 0
  };

  onSubmit(asetusdata) {
    console.log(this.kayttaja.ryhmatunnus);
  }

  ngOnInit() {
    }
  }
