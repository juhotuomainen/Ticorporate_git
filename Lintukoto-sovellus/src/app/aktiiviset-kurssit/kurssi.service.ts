import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class KurssiService {
  constructor(private http: HttpClient) {}

  poistaMuistiinpano(otsikko, kurssi, tunnus) {
    this.http
      .post("http://localhost:3000/poistamp", {
        otsikko: otsikko,
        kurssi: kurssi,
        tunnus: tunnus
      })
      .subscribe(result => {
        console.log(result);
      });
  }
}
