import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AsetuksetService {
  asetusLadattu: {
    tunnus;
    aloituspaiva;
    ryhmatunnus;
    kokonaisOp;
    yhteisetTuokiot;
    pollojenNakyminen;
    henkipolloOpinnot;
    opiskeluajankohta;
  };
  constructor(private http: HttpClient, private router: Router) {}

  tallennaKayttajanAsetukset(lomake: Object) {
    this.http
      .post("http://localhost:3000/tallennaAseukset", lomake)
      .subscribe(lol => {
        console.log(lol);
      });
  }

  haeAsetusLadattu() {
    return this.asetusLadattu;
  }

  haeKayttajanAsetukset(tunnus) {
    return new Promise((resolve, reject) => {
      this.http
        .get<{
          asetukset: {
            tunnus;
            aloituspaiva;
            ryhmatunnus;
            kokonaisOp;
            yhteisetTuokiot;
            pollojenNakyminen;
            henkipolloOpinnot;
            opiskeluajankohta;
          };
        }>("http://localhost:3000/haeAsetukset", {
          params: { tunnus: tunnus }
        })
        .subscribe(asetukset => {
          this.asetusLadattu = asetukset.asetukset;
          console.log(this.asetusLadattu);
          resolve(asetukset);
        });
    });
  }
}
