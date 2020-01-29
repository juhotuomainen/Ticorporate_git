import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-asetukset',
  templateUrl: './asetukset.component.html',
  styleUrls: ['./asetukset.component.css']
})
export class AsetuksetComponent implements OnInit {
asetuslomake;

constructor(public fb: FormBuilder) {
// lomakkeen tiedot ja niiden tietotyypit
  this.asetuslomake = this.fb.group( {
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
    milloinVain: false
  }
  );
}

onSubmit(asetusdata) {
  // koska backiä ei ole vielä niin tieto tallentuu localstorageen
  let asetukset = JSON.parse(localStorage.getItem('asetukset'));
  // katsoo onko taulukossa dataa. Jos ei niin lisätään datatiedon
  if (asetukset === null) {
    asetukset = [asetusdata];
  } else {
    // jos on niin päivitetään vain muiden asetusten joukkon
    asetukset.push(asetusdata);
  }
}

  ngOnInit() {
  }

}
