import { Component, OnInit, AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-suoritetut-kurssit",
  templateUrl: "./suoritetut-kurssit.component.html",
  styleUrls: ["./swiper.min.css", "./suoritetut-kurssit.component.css"]
})
export class SuoritetutKurssitComponent implements AfterViewInit {
  title: "Suoritetut kurssit";

  mySwiper: Swiper;
  // tslint:disable-next-line: ban-types
  kurssit = [
    {
      Kurssikoodi: "X301",
      nimi: "Web sovelluskehitys",
      kuva: "../../assets/images/pinkkihyrrahattu.png",
      pisteet: 5
    },
    {
      Kurssikoodi: "X302",
      nimi: "Tietokannat",
      kuva: "../../assets/images/pinkkihyrrahattu.png",
      pisteet: 1
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli.png",
      pisteet: 1
    },
    {
      Kurssikoodi: "X304",
      nimi: "Web-liiketoiminta",
      kuva: "../../assets/images/pollomalli3.0_surullinen.png",
      pisteet: 2
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli3.png",
      pisteet: 3
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli.png",
      pisteet: 4
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pinkkihyrrahattu.png",
      pisteet: 10
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli.png",
      pisteet: 8
    },
    {
      Kurssikoodi: "X303",
      nimi: "Venäjä",
      kuva: "../../assets/images/pollomalli3.png",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Ruotsi 1",
      kuva: "../../assets/images/pinkkihyrrahattu.png",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Viestintä",
      kuva: "../../assets/images/pollomalli3.png",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Liiketalousmatiikka",
      kuva: "../../assets/images/pinkkihyrrahattu.png",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli3.png",
      pisteet: 7
    }
  ];

  //opintopisteet yhteensä
  kurssityht: number = this.kurssit
    .map(a => a.pisteet)
    .reduce(function(a, b) {
      return a + b;
    });

  constructor() {}

  ngAfterViewInit() {
    //swiperin koodi
    this.mySwiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
}
