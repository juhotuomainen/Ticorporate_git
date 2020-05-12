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

  // onSumbit funktiolla lähetetään asetukset ja tallennetaan ne tietokantaan

  onSubmit(asetusdata) {
    this.asetus.tallennaKayttajanAsetukset(asetusdata);

    document.getElementById("ilmoitus").classList.add("naytaIlmoitus");

    document.getElementById("ilmoitus").classList.remove("piilotaIlmoitus");
  }

  // haeTunnus funktiolla haetaan käyttäjätunnus localstoragesta ja
  // tallennetaan se tunnus & asetuslomake.tunnus muuttujiin

  haeTunnus() {
    this.tunnus = localStorage.getItem("user");
    this.asetuslomake.tunnus = localStorage.getItem("user");
  }
  // funktio hakee käyttäjän asetukset tietokanasta ja tallentaa ne asetuksetLadattu muuttujaan,
  // jotta ne voidaan näyttää viewissä.
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

    /* Haluttiin varmistaa että opintojen aloituspäivämäärä ei voi olla tulevaisuudessa. 
    Eli se voi olla olla enintään sen hetkinen kuluva päivä*/

    // Kokoaan tämän hetkisen päivän tiedot erikseen
    let today: any = new Date();
    let dd: any = today.getDate();
    // Tammikuu on 0, joten fiksun tulostuksen takia +1
    let mm: any = today.getMonth() + 1;
    let yyyy: any = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    // Koottu päivämäärä viedään lomakkeen max-kohtaan
    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("datefield").setAttribute("max", today);
  }
}
