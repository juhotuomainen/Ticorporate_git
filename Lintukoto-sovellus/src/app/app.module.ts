import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {
  DragAndDropService,
  ResizeService,
  RecurrenceEditorModule
} from '@syncfusion/ej2-angular-schedule';

import { KalenteriComponent } from './kalenteri/kalenteri.component';
import { AktiivisetKurssitComponent } from './aktiiviset-kurssit/aktiiviset-kurssit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuoritetutKurssitComponent } from './suoritetut-kurssit/suoritetut-kurssit.component';
import { AsetuksetComponent } from './asetukset/asetukset.component';
import { ModalComponent } from './modal/modal.component';
import { KirjautuminenComponent } from './kirjautuminen/kirjautuminen.component';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

// in memory web apin importit
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserService } from './user.service';

// grid
import {
  GridModule,
  RowDDService,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent,
    AsetuksetComponent,
    ModalComponent,
    KirjautuminenComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScheduleModule,
    TreeViewModule,
    GridModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UserService, { dataEncapsulation: false }),
    ReactiveFormsModule
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
