import { Component, OnInit, Input } from "@angular/core";
import { FormsModule, FormBuilder, NgForm } from "@angular/forms";
import { AsetuksetService } from "./asetukset.service";

@Component({
  selector: "app-asetukset",
  templateUrl: "./asetukset.component.html",
  styleUrls: ["./asetukset.component.css"]
})
export class AsetuksetComponent implements OnInit {
  asetuslomake;
  tunnus = localStorage.getItem("user");
  asetuksetLadattu;


  constructor(public fb: FormBuilder, private asetus: AsetuksetService) {
    // lomakkeen tiedot ja niiden tietotyypit
    this.asetuslomake = this.fb.group({
      aloituspaiva: "",
      ryhmatunnus: "",
      tunnus: "",
      kokonaisOp: 0,
      yhteisetTuokiot: true,
      pollojenNakyminen: true,
      henkipolloOpinnot: false,
      henkipolloElama: false,
      henkipolloValistus: false,
      aamupaiva: false,
      iltapaiva: false,
      milloinVain: false
    });
  }

  onSubmit(asetusdata) {
    // koska backiä ei ole vielä niin tieto tallentuu localstorageen
    console.log(asetusdata);
    this.asetus.tallennaKayttajanAsetukset(asetusdata);
    // let asetukset = JSON.parse(localStorage.getItem("asetukset"));
    // katsoo onko taulukossa dataa. Jos ei niin lisätään datatiedon
    // if (asetukset === null) {
    // asetukset = [asetusdata];
    // } else {
    // jos on niin päivitetään vain muiden asetusten joukkon
    // asetukset.push(asetusdata);
    // }
    document.getElementById("ilmoitus").classList.add("naytaIlmoitus");

    document.getElementById("ilmoitus").classList.remove("piilotaIlmoitus");
  }
  haeTunnus() {
    this.tunnus = localStorage.getItem("user");
    this.asetuslomake.tunnus = localStorage.getItem("user");
  }
  haeAsetukset(tunnus) {
    this.asetus.haeKayttajanAsetukset(tunnus).then(asetukset => {
      this.asetuksetLadattu = asetukset;
    });
  }

  ngOnInit() {
    this.haeTunnus();
    this.haeAsetukset(this.tunnus);
    setTimeout(() => {
      console.log(this.asetuksetLadattu);
    }, 4000);
  }
}
