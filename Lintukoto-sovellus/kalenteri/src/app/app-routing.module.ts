import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";
import { AsetuksetComponent } from "./asetukset/asetukset.component";
import { ModalComponent } from "./modal/modal.component";

const routes: Routes = [
  { path: "kalenteri", component: KalenteriComponent },
  { path: "aktiiviset", component: AktiivisetKurssitComponent },
  { path: "suoritetut", component: SuoritetutKurssitComponent },
  { path: "asetukset", component: AsetuksetComponent },
  { path: "muistiinpano", component: ModalComponent },

  { path: "/", component: KalenteriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
