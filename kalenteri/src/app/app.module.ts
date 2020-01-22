import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent,
    KalenteriComponent,
    AktiivisetKurssitComponent,
    NavbarComponent,
    SuoritetutKurssitComponent,
    AsetuksetComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ScheduleModule, TreeViewModule, RecurrenceEditorModule],
  providers: [DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
