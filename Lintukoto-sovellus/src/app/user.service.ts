import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

// UserService perii InMemoryDbServicen ominaisuudet
export class UserService {
  constructor() {}

  // palauttaa mockup "tietokannan" datan
  getUSer() {
    const user = [{ id: 1, username: "admin", password: "password" }];
    return { user };
  }
}
