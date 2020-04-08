import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class KurssiService {
  constructor(private http: HttpClient) {}

  kurssiOnSuoritettu(kurssi, tunnus) {
    this.http
      .post("http://localhost:3000/kurssiSuoritettu", {
        kurssi: kurssi,
        tunnus: tunnus,
      })
      .subscribe((lol) => {
        location.reload();
      });
  }

  tehtavaTehty(tehtava, kurssi, tunnus) {
    this.http
      .post("http://localhost:3000/tehtavaOnValmis", {
        tehtava: tehtava,
        kurssi: kurssi,
        tunnus: tunnus,
      })
      .subscribe((result) => {
        location.reload();
        console.log(result);
      });
  }

  poistaMuistiinpano(otsikko, kurssi, tunnus) {
    this.http
      .post("http://localhost:3000/poistamp", {
        otsikko: otsikko,
        kurssi: kurssi,
        tunnus: tunnus,
      })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
