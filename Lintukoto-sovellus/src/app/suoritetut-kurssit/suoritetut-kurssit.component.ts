import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suoritetut-kurssit',
  templateUrl: './suoritetut-kurssit.component.html',
  styleUrls: ['./suoritetut-kurssit.component.css']
})
export class SuoritetutKurssitComponent implements OnInit {
  title: 'Suoritetut kurssit';
  // tslint:disable-next-line: ban-types
  kurssit: Array<Object> = [
    {
      Kurssikoodi: 'X301',
      nimi: 'Web sovelluskehitys',
      kuva: '../../assets/images/orsipollo4.png'
    },
    {
      Kurssikoodi: 'X302',
      nimi: 'Tietokannat',
      kuva: '../../assets/images/home.png'
    },
    {
      Kurssikoodi: 'X303',
      nimi: 'Yrittäjyys',
      kuva: '../../assets/images/pollomalli.png'
    },
    {
      Kurssikoodi: 'X304',
      nimi: 'Web-liiketoiminta',
      kuva: '../../assets/images/pollomalli3.0_surullinen.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
