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
    aloituspaiva: '',
    ryhmatunnus: '',
    kokonaisOp: 0,
    yhteisetTuokiot: true,
    pollojenNakyminen: true,
    henkipolloOpinnot: true,
    henkipolloElama: true,
    henkipolloValistus: true,
    aamupaiva: false,
    iltapaiva: false,
    milloinVain: true
  };

  onSubmit(asetusdata) {
    console.log(this.kayttaja.ryhmatunnus);
  }

  ngOnInit() {
    }
  }
