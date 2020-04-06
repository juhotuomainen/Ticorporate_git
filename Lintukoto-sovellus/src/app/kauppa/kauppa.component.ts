import { Component, OnInit } from "@angular/core";
import { Tuote } from "../tuote.model";

@Component({
  selector: "app-kauppa",
  templateUrl: "./kauppa.component.html",
  styleUrls: ["./kauppa.component.css"],
})
export class KauppaComponent implements OnInit {
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
      nimi: "Kyynel",
      hinta: 1,
      kuva: "../../assets/images/kyyneleet.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
    {
      nimi: "Lippalakki",
      hinta: 3,
      kuva: "../../assets/images/lippalakki.svg",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
