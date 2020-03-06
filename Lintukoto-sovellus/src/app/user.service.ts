import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  signUp(data) {
    return this.http.post(`${environment.apiUrl}/user/signup`, data);
  }
  updateUser(data) {
    return this.http.put(`${environment.apiUrl}/user/updateUser`, data);
  }
  updatePassword(data) {
    return this.http.put(`${environment.apiUrl}/user/updatePassword`, data);
  }
  login(data) {
    console.log("lol");
    return this.http.post(`${environment.apiUrl}/login`, data);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
  isAuthenticated() {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = helper.decodeToken(token);
      const isExpired = helper.isTokenExpired(token);
      return !!decodedToken && !isExpired;
    } catch (ex) {
      return false;
    }
  }
}
