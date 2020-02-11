import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Muistiinpano } from "./muistiinpano.model";
import { Kurssi } from "./kurssi.model";
import { Observable } from "rxjs";

// import { Observable } from 'rxjs/observable';
//import "rxjs/add/operator/map";
//import "rxjs/operator/do";
@Injectable({
  providedIn: "root"
})
export class YhteysAPIService {
  constructor(private http: HttpClient) {}

  getOtsikko(): Observable<Muistiinpano[]> {
    return this.http.get<Muistiinpano[]>("http://localhost:3000/notes");
  }

  getMuistiinpano(): Observable<Muistiinpano[]> {
    return this.http.get<Muistiinpano[]>("http://localhost:3000/notes");
  }
  getSingleMuistiinpano(kurssi: string): Observable<Muistiinpano[]> {
    return this.http.get<Muistiinpano[]>(
      `http://localhost:3000/notes?kurssi=${kurssi}`
    );
  }
  getKurssit(): Observable<Kurssi[]> {
    return this.http.get<Kurssi[]>(`http://localhost:3000/kurssit`);
  }
}
