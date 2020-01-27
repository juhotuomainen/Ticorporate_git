import { Component, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-aktiiviset-kurssit',
  templateUrl: './aktiiviset-kurssit.component.html',
  styleUrls: ['./aktiiviset-kurssit.component.css'],
  providers: [ModalComponent]
})
export class AktiivisetKurssitComponent implements OnInit {
  title = 'Aktiiviset kurssit';
  muistiinpano = 'Paljon muistiipanoja....';
  kurssit: Array<Object> = [
    {
      Kurssikoodi: 'X301',
      nimi: 'Web sovelluskehitys',
      kuva: '../../assets/images/orsipollo4.png',
      muistiinpanoTag: 'Angular'
    },
    {
      Kurssikoodi: 'X302',
      nimi: 'Tietokannat',
      kuva: '../../assets/images/home.png',
      muistiinpanoTag: 'SQL vs MongoDB'
    },
    {
      Kurssikoodi: 'X303',
      nimi: 'Yrittäjyys',
      kuva: '../../assets/images/pollomalli.png',
      muistiinpanoTag: 'Business model canvas'
    },
    {
      Kurssikoodi: 'X304',
      nimi: 'Web-liiketoiminta',
      kuva: '../../assets/images/pollomalli3.0_surullinen.png',
      muistiinpanoTag: 'Markkinointi'
    }
  ];

  // showModal(): void {
  // this.displayService.setShowModal(true);
  // communication to show the modal, I use a behaviour subject from a service layer here
  // }

  constructor() {}

  ngOnInit() {}
}
