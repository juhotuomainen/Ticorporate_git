import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";

import { ScheduleModule, WeekService } from "@syncfusion/ej2-angular-schedule";
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
import { KirjautuminenComponent } from "./kirjautuminen/kirjautuminen.component";

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DragDropModule } from '@angular/cdk/drag-drop';

// in memory web apin importit
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserService } from "./user.service";

// grid
import {
  GridModule,
  RowDDService,
  EditService,
  ToolbarService
} from "@syncfusion/ej2-angular-grids";
import { YhteysAPIService } from "./yhteys-api.service";
import { PesaComponent } from './pesa/pesa.component';

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent,
    AsetuksetComponent,
    ModalComponent,
    KirjautuminenComponent,
    PesaComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScheduleModule,
    DragDropModule,
    GridModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UserService, {
      dataEncapsulation: false
    }),
    ReactiveFormsModule,
    DragDropModule,
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
