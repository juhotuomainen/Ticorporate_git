import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";
import { AsetuksetComponent } from "./asetukset/asetukset.component";
import { KirjautuminenComponent } from "./kirjautuminen/kirjautuminen.component";
import { ModalComponent } from "./modal/modal.component";
import { HenkipolloinfoComponent } from "./henkipolloinfo/henkipolloinfo.component";
import { ErrorComponent } from "./error/error.component";
import { PesaComponent } from "./pesa/pesa.component";

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  // canActivate: [AuthGuard] varmistaa että on kirjauduttu sisään, ennen kuin päästään muualle sovelluksessa
  {
    path: "kalenteri",
    component: KalenteriComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "aktiiviset",
    component: AktiivisetKurssitComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "suoritetut",
    component: SuoritetutKurssitComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "asetukset",
    component: AsetuksetComponent,
    canActivate: [AuthGuard]
  },
  { path: "kirjautuminen", component: KirjautuminenComponent },
  { path: "muistiinpano", component: ModalComponent, canActivate: [AuthGuard] },
  {
    path: "henkipolloinfo",
    component: HenkipolloinfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "pesa",
    component: PesaComponent,
    canActivate: [AuthGuard]
  },

  { path: "", component: KirjautuminenComponent },

  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
