import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";

const routes: Routes = [
  { path: "kalenteri", component: KalenteriComponent },
  { path: "aktiiviset", component: AktiivisetKurssitComponent },
  { path: "suoritetut", component: SuoritetutKurssitComponent },
  { path: "", component: KalenteriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
