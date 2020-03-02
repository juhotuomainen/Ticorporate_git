import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})

// UserService perii InMemoryDbServicen ominaisuudet
export class UserService implements InMemoryDbService {
  constructor() {}

  // palauttaa mockup "tietokannan" datan
  createDb() {
    const user = [{ id: 1, username: "admin", password: "password" }];
    return { user };
  }
}
