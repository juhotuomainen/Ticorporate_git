import { Component, OnInit } from "@angular/core";
import { Tuote } from "../tuote.model";
import { User } from "../user.model";
import { YhteysAPIService } from "../yhteys-api.service";

@Component({
  selector: "app-kauppa",
  templateUrl: "./kauppa.component.html",
  styleUrls: ["./kauppa.component.css"],
})
export class KauppaComponent implements OnInit {
  tunnus = localStorage.user;
  kayttaja: User;
  kurssityht: number;

  tuotteet: Array<Tuote> = [
    {
      nimi: "Hyrrahattu",
      hinta: 4,
      kuva: "../../assets/images/hyrrahattu.svg",
    },
    {
      nimi: "Mexico",
      hinta: 5,
      kuva: "../../assets/images/mexico.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Kaulahuivi",
      hinta: 5,
      kuva: "../../assets/images/kaulahuivi.svg",
    },
    {
      nimi: "Kruunu",
      hinta: 2,
      kuva: "../../assets/images/kruunu.svg",
    },
    {
      nimi: "Hiiri",
      hinta: 4,
      kuva: "../../assets/images/hiiri.svg",
    },
    {
      nimi: "Laukku",
      hinta: 3,
      kuva: "../../assets/images/laukku.svg",
    },
    {
      nimi: "Silinteri",
      hinta: 9,
      kuva: "../../assets/images/mustahattu.svg",
    },
    {
      nimi: "Naamio",
      hinta: 3,
      kuva: "../../assets/images/naamio.svg",
    },
    {
      nimi: "Pipo",
      hinta: 3,
      kuva: "../../assets/images/pipo.svg",
    },
    {
      nimi: "Rusetti",
      hinta: 2,
      kuva: "../../assets/images/rusetti.svg",
    },
    {
      nimi: "Pyöreät lasit",
      hinta: 5,
      kuva: "../../assets/images/pyoreetlasit.svg",
    },
  ];

  constructor(private yhteysApi: YhteysAPIService) {}

  ngOnInit() {
    this.yhteysApi.getKurssit(this.tunnus).subscribe((tunnus) => {
      this.kayttaja = tunnus;
      console.log(this.kayttaja);
    });
  }
}
