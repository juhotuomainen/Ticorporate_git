import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import {
  DragAndDropService,
  ResizeService,
  RecurrenceEditorModule
<<<<<<< HEAD
} from '@syncfusion/ej2-angular-schedule';

import { KalenteriComponent } from './kalenteri/kalenteri.component';
import { AktiivisetKurssitComponent } from './aktiiviset-kurssit/aktiiviset-kurssit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuoritetutKurssitComponent } from './suoritetut-kurssit/suoritetut-kurssit.component';
import { AsetuksetComponent } from './asetukset/asetukset.component';
=======
} from "@syncfusion/ej2-angular-schedule";

import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";
>>>>>>> 6bf5d10ab0b4a4efb9e3b636a1a9bfad86e9374d

import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";

//grid
import {
  GridModule,
  RowDDService,
  EditService
} from "@syncfusion/ej2-angular-grids";

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent,
    AsetuksetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    TreeViewModule,
    GridModule
  ],
  providers: [DragAndDropService, ResizeService, RowDDService, EditService],
  bootstrap: [AppComponent]
})
export class AppModule {}
