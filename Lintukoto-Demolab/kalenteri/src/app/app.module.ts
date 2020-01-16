import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import { DragAndDropService } from "@syncfusion/ej2-angular-schedule";

import { KalenteriComponent } from "./kalenteri/kalenteri.component";

@NgModule({
  declarations: [AppComponent, KalenteriComponent],
  imports: [BrowserModule, AppRoutingModule, ScheduleModule],
  providers: [DragAndDropService],
  bootstrap: [AppComponent]
})
export class AppModule {}
