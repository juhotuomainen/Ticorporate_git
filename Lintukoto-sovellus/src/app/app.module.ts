import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";


import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {
  DragAndDropService,
  ResizeService,
  RecurrenceEditorModule
} from '@syncfusion/ej2-angular-schedule';

// komponentit
import { KalenteriComponent } from "./kalenteri/kalenteri.component";
import { AktiivisetKurssitComponent } from "./aktiiviset-kurssit/aktiiviset-kurssit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SuoritetutKurssitComponent } from "./suoritetut-kurssit/suoritetut-kurssit.component";
import { AsetuksetComponent } from "./asetukset/asetukset.component";
import { ModalComponent } from "./modal/modal.component";


import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { DragDropModule } from "@angular/cdk/drag-drop";

// grid
import {
  GridModule,
  RowDDService,
  EditService,
  ToolbarService

} from "@syncfusion/ej2-angular-grids";
import { YhteysAPIService } from "./yhteys-api.service";

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScheduleModule,
    TreeViewModule,
    DragDropModule,
    GridModule
    HttpClientModule,
    HttpModule,
    NgbModule
  ],
  providers: [
    DragAndDropService,
    ResizeService,
    RowDDService,
    EditService,
    ToolbarService,
    YhteysAPIService,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
