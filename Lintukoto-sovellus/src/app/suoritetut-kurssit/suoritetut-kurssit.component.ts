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
      kuva: "../../assets/images/Kurssipollo_oranssi.svg",
      pisteet: 5
    },
    {
      Kurssikoodi: "X302",
      nimi: "Tietokannat",
      kuva: "../../assets/images/Kurssipollo_violetti.svg",
      pisteet: 1
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_gradientlilaoranssi.svg",
      pisteet: 1
    },
    {
      Kurssikoodi: "X304",
      nimi: "Web-liiketoiminta",
      kuva: "../../assets/images/Kurssipollo_surku1.svg",
      pisteet: 2
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_tummanvihree.svg",
      pisteet: 3
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_turkoosi.svg",
      pisteet: 4
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_gradientlila.svg",
      pisteet: 10
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_gradientkeltanen.svg",
      pisteet: 8
    },
    {
      Kurssikoodi: "X303",
      nimi: "Venäjä",
      kuva: "../../assets/images/Kurssipollo_tummansininen.svg",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Ruotsi 1",
      kuva: "../../assets/images/Kurssipollo_toffee.svg",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Viestintä",
      kuva: "../../assets/images/Kurssipollo_jokupunanen.svg",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Liiketalousmatiikka",
      kuva: "../../assets/images/Kurssipollo_harmaa.svg",
      pisteet: 7
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/Kurssipollo_sinilila.svg",
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
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
}
