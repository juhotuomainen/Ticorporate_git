import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import { DragAndDropService, ResizeService } from "@syncfusion/ej2-angular-schedule";

import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";

import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ScheduleModule, TreeViewModule],
<<<<<<< HEAD
  providers: [DragAndDropService],
=======
  providers: [DragAndDropService, ResizeService],
>>>>>>> c3978c115e8b3fa507bc237853bd8b56ae7e1ea0
  bootstrap: [AppComponent]
})
export class AppModule {}
