import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
import { HttpClient } from "@angular/common/http";
import { YhteysAPIService } from "../yhteys-api.service";
import { Kayttaja } from "../kayttaja.model";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { AsetuksetService } from '../asetukset/asetukset.service';

@Component({
  selector: "app-kirjautuminen",
  templateUrl: "./kirjautuminen.component.html",
  styleUrls: ["./kirjautuminen.component.css"]
})
export class KirjautuminenComponent implements OnInit {
  loginData: any = <any>{};
  // luokan ominaisuudet:
  // authista tullut
  cred: any[] = [];
  // käyttätiedot
  userData;
  tunnus;
  password;
  logo: "../../assets/images/LOGO_ilman_taustaa.png";

  // tslint:disable-next-line: no-shadowed-variable
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private yhteysAPI: YhteysAPIService,
    private dialog: MatDialog,
    private dialogiasetukset: AsetuksetService
  ) {
    // luo lomakkeen tiedot ryhmään ja ryhmän sisällä olio
    // this.userData = this.FormBuilder.group({ username: "", password: "" });
  }

  // data on lomakkeelta tuleva tieto, joka haetaan tietokannasta (in memory web api)
  ngOnInit() {
    // subscribe tallentaa sen cred-muuttujaan
    // this.AuthService.getData().subscribe((data: any[]) => {
    //   this.cred = data;
    // });
  }
  login(loginForm: NgForm) {
    console.log(this.loginData);
    if (loginForm.invalid) {
      return;
    }
    this.AuthService.login();
    this.userService.login(this.loginData).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", this.loginData.tunnus);
        this.router.navigate(["/kalenteri"]);
        // hakee asetuksista tiedon, haluaanko käyttäjä nähdä Henkipöllön tervehdyksen sisään kirjautuessa
        this.http.get("henkipolloOpinnot", this.dialogiasetukset.asetusLadattu.henkipolloOpinnot);
        // Jos käyttäjä on raksinut asetuksista ruudun jossa sallitaan tervehdys, kutsutaan tervehdyksen käynnitävä metodi
        if (this.dialogiasetukset.asetusLadattu.henkipolloOpinnot == true) {
          this.popup();
        }
      },
      err => {
        alert("Invalid username or password");
      }
    );
  }

  // Avaa sisäänkirjautuessa Henkipöllön tervehdyksen popup-ikkunan
  popup() {
    this.dialog.open(DialogComponent);
  }
}
