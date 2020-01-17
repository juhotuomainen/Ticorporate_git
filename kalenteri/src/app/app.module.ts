import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import { DragAndDropService } from "@syncfusion/ej2-angular-schedule";

import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ScheduleModule],
  providers: [DragAndDropService],
  bootstrap: [AppComponent]
})
export class AppModule {}
