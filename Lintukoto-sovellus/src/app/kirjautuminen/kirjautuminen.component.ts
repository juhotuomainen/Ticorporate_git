import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kirjautuminen',
  templateUrl: './kirjautuminen.component.html',
  styleUrls: ['./kirjautuminen.component.css']
})
export class KirjautuminenComponent implements OnInit {

// luokan ominaisuudet:
// authista tullut
  cred: any[] = [];
// käyttätiedot
  userData;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService) {
    // luo lomakkeen tiedot ryhmään ja ryhmän sisällä olio
    this.userData = this.FormBuilder.group( {username: '', password: ''} );
}

// sisältää userData-olion, jossa on ominaisuuksina käyttäjätunnus ja salasana
onSubmit(loginData) {
    console.log(loginData);
    if (loginData.username === this.cred[0].username && loginData.password === this.cred[0].password) {
      this.AuthService.login();
    } else {
      alert('Väärä tunnus tai salasana!');
    }
  }

// data on lomakkeelta tuleva tieto, joka haetaan tietokannasta (in memory web api)
ngOnInit() {
    // subscribe tallentaa sen cred-muuttujaan
    this.AuthService.getData().subscribe((data: any []) => {
        this.cred = data;
    });
}

}
