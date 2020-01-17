import { Component, OnInit } from "@angular/core";

import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  AgendaService
} from "@syncfusion/ej2-angular-schedule";

import { loadCldr, L10n } from "@syncfusion/ej2-base";
/*import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';*/

loadCldr(
  require("cldr-data/supplemental/numberingSystems.json"),
  require("cldr-data/main/fi/ca-gregorian.json"),
  require("cldr-data/main/fi/numbers.json"),
  require("cldr-data/main/fi/timeZoneNames.json")
);
L10n.load({
  fi: {
    schedule: {
      day: "Päivä",
      week: "Viikko",
      month: "Kuukausi",
      today: "Tänään"
    }
  }
});

@Component({
  selector: "app-kalenteri",
  templateUrl: "./kalenteri.component.html",
  styleUrls: ["./kalenteri.component.css"],
  providers: [WeekService, AgendaService]
})
export class KalenteriComponent {
  public selectedDate: Date = new Date();
  public views: Array<string> = ["Week"];
  public showHeaderBar: Boolean = true;
  public weekFirstDay: number = 1;
  title = "kalenteri";
}
