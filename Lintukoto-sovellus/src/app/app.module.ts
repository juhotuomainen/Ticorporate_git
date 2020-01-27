import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import {
  DragAndDropService,
  ResizeService,
  RecurrenceEditorModule
} from "@syncfusion/ej2-angular-schedule";

import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";
import { AsetuksetComponent } from "./asetukset/asetukset.component";
import { ModalComponent } from "./modal/modal.component";

import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";

// grid
import {
  GridModule,
  RowDDService,
  EditService,
  ToolbarService
} from "@syncfusion/ej2-angular-grids";

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent,
    AsetuksetComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    TreeViewModule,
    GridModule
  ],
  providers: [
    DragAndDropService,
    ResizeService,
    RowDDService,
    EditService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
