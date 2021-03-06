// auth hakee tunnukset tietokannasta
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private cred;
  // oikeasti tulisi apin osoite
  credUrl: "http://localhost:3000/login";
  loggedIn = localStorage.token;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private router: Router) {}

  getData() {
    return this.http.get("http://localhost:3000/login");
  }

  login() {
    if (this.loggedIn === false) {
      this.loggedIn = true;
      this.router.navigate(["/kalenteri"]);
    }
  }

  logout() {
    this.loggedIn = false;
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
