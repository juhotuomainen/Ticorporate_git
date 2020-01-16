import { Component } from "@angular/core";

import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  AgendaService
} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: "app-root",
  templateUrl: "/app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [WeekService, AgendaService]
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ["Day", "Week", "WorkWeek"];
  public showHeaderBar: Boolean = false;
  title = "kalenteri";
}
