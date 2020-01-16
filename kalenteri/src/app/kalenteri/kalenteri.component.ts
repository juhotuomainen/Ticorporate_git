import { Component, OnInit } from "@angular/core";

import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  AgendaService
} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: "app-kalenteri",
  templateUrl: "./kalenteri.component.html",
  styleUrls: ["./kalenteri.component.css"],
  providers: [WeekService, AgendaService]
})
export class KalenteriComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ["Day", "Week", "WorkWeek"];
  public showHeaderBar: Boolean = false;
  title = "kalenteri";
}
