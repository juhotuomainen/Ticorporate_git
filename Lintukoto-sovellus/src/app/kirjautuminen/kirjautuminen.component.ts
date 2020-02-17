import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
import { HttpClient } from "@angular/common/http";
import { YhteysAPIService } from "../yhteys-api.service";
import { Kayttaja } from "../kayttaja.model";

@Component({
  selector: "app-kirjautuminen",
  templateUrl: "./kirjautuminen.component.html",
  styleUrls: ["./kirjautuminen.component.css"]
})
export class KirjautuminenComponent implements OnInit {
  // luokan ominaisuudet:
  // authista tullut
  cred: any[] = [];
  // käyttätiedot
  userData;
  logo: "../../assets/images/LOGO_ilman_taustaa.png";

  // tslint:disable-next-line: no-shadowed-variable
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private http: HttpClient,
    private yhteysAPI: YhteysAPIService
  ) {
    // luo lomakkeen tiedot ryhmään ja ryhmän sisällä olio
    this.userData = this.FormBuilder.group({ username: "", password: "" });
  }

  // sisältää userData-olion, jossa on ominaisuuksina käyttäjätunnus ja salasana
  // onSubmit(loginData) {
  //   console.log(loginData);
  //   const inputObject = {
  //     tunnus: loginData.username,
  //     salasana: loginData.password
  //   };
  //   const kayttajaTiedot = this.yhteysAPI.getUser(
  //     loginData.username,
  //     loginData.password
  //   );

  //     if (inputObject.tunnus == kayttajaTiedot[]tunnus) {
  //       this.AuthService.login();
  //     } else {
  //       alert("Väärä tunnus tai salasana!");
  //     }

  // }

  // data on lomakkeelta tuleva tieto, joka haetaan tietokannasta (in memory web api)
  ngOnInit() {
    // subscribe tallentaa sen cred-muuttujaan
    this.AuthService.getData().subscribe((data: any[]) => {
      this.cred = data;
    });
  }
}
