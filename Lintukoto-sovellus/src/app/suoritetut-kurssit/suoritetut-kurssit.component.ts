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
  kurssit: Array<Object> = [
    {
      Kurssikoodi: "X301",
      nimi: "Web sovelluskehitys",
      kuva: "../../assets/images/pinkkihyrrahattu.png"
    },
    {
      Kurssikoodi: "X302",
      nimi: "Tietokannat",
      kuva: "../../assets/images/pinkkihyrrahattu.png"
    },
    {
      Kurssikoodi: "X303",
      nimi: "Yrittäjyys",
      kuva: "../../assets/images/pollomalli.png"
    },
    {
      Kurssikoodi: "X304",
      nimi: "Web-liiketoiminta",
      kuva: "../../assets/images/pollomalli3.0_surullinen.png"
    }
  ];

  constructor() {}

  ngAfterViewInit() {
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
