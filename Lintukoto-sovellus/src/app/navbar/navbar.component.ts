import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  init = true;
  logInStatus = () => {
    if (localStorage.token) {
      return true;
    } else {
      return false;
    }
  };

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit() {}

  initChange() {
    this.init = !this.init;
  }
}
