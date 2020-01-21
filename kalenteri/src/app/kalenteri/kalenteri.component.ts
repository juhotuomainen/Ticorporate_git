declare var require: any;

import { Component, OnInit, ViewChild } from "@angular/core";
import {
  TreeViewComponent,
  DragAndDropEventArgs
} from "@syncfusion/ej2-angular-navigations";

import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  AgendaService,
  DragAndDropService,
  DragEventArgs,
  ResizeService,
  CellClickEventArgs,
  ScheduleComponent,
  ResizeEventArgs
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

// Käännös suomeksi
L10n.load({
  fi: {
    schedule: {
      day: "Päivä",
      week: "Viikko",
      month: "Kuukausi",
      today: "Tänään",
      noEvents: "Ei tapahtumia",
      emptyContainer: "Tälle päivälle ei ole tapahtumia.",
      allDay: "Koko päivä",
      start: "Aloitus",
      end: "Lopetus",
      more: "lisää",
      close: "Sulje",
      cancel: "Peruuta",
      noTitle: "(Ei otsikkoa)",
      delete: "Poista",
      deleteEvent: "Poista tapahtuma",
      deleteMultipleEvent: "Poista monia tapahtumia",
      selectedItems: "Valitut kohteet",
      deleteSeries: "Poista sarja",
      edit: "Muokkaa",
      editSeries: "Muokkaa sarjaa",
      editEvent: "Muokkaa tapahtumaa",
      createEvent: "Luo tapahtuma",
      subject: "Aihe",
      addTitle: "Lisää otsikko",
      moreDetails: "Näytä enemmän",
      save: "Tallenna",
      editContent: "Haluatko muokata vain tätä tapahtumaa vai koko sarjaa?",
      deleteRecurrenceContent:
        "Haluatko poistaa vain tämän tapahtuman vai koko sarjan?",
      deleteContent: "Oletko varma että haluat poistaa tämän tapahtuman?",
      deleteMultipleContent:
        "Oletko varma että haluat poistaa nämä tapahtumat?",
      newEvent: "Uusi tapahtuma",
      title: "Otsikko",
      location: "Sijainti",
      description: "kuvaus",
      timezone: "Aikavyöhyke",
      startTimezone: "Aloitus aikavyöhyke",
      endTimezone: "Lopetus aikavyöhyke",
      repeat: "Toisto",
      saveButton: "Tallenna",
      cancelButton: "Peruuta",
      deleteButton: "Poista",
      recurrence: "Toistuminen",
      wrongPattern: "Toistokuvio ei kelpaa.",
      seriesChangeAlert:
        "Tämän sarjan tiettyihin ilmentymiin tehdyt muutokset peruutetaan ja kyseiset tapahtumat vastaavat sarjaa uudelleen.",
      createError:
        "Tapahtuman keston on oltava lyhyempi kuin kuinka usein se tapahtuu. Lyhennä kestoa tai muuta toistuvuuskuviota toistotapahtumaeditorissa.",
      recurrenceDateValidation:
        "Joissakin kuukausissa on vähemmän kuin valittu päivämäärä. Näiden kuukausien aikana tapahtuma laskee kuukauden viimeisenä päivänä.",
      sameDayAlert:
        "Kaksi saman tapahtuman tapahtumaa ei voi tapahtua samana päivänä.",
      editRecurrence: "Muokkaa toistuvuutta",
      repeats: "Toistuu",
      alert: "HUOMIO",
      startEndError: "Valittu lopetuspäivämäärä tapahtuu ennen aloituspäivää.",
      invalidDateError: "Annettu päivämääräarvo on virheellinen.",
      ok: "Ok",
      occurrence: "Esiintyminen",
      series: "Sarja",
      previous: "Edellinen",
      next: "Seuraava",
      timelineDay: "Päivän aikajana",
      timelineWeek: "Viikon aikajana",
      timelineWorkWeek: "Työviikon aikajana",
      timelineMonth: "Kuukauden aikajana"
    },
    recurrenceeditor: {
      none: "Ei mitään",
      daily: "Päivittäin",
      weekly: "Viikottain",
      monthly: "Kuukausittain",
      month: "Kuukausi",
      yearly: "Vuosittainen",
      never: "Ei ikinä",
      until: "Päättyy",
      count: "Laskuri",
      first: "ensimmäinen",
      second: "toinen",
      third: "kolmas",
      fourth: "neljäs",
      last: "viimeinen",
      repeat: "Toista",
      repeatEvery: "Toista joka",
      on: "Toista",
      end: "Lopetus",
      onDay: "Päivänä",
      days: "Päivä",
      weeks: "Viikko",
      months: "Kuukausi",
      years: "Vuosi",
      every: "joka",
      summaryTimes: "kertaa",
      summaryOn: "",
      summaryUntil: "päättyy",
      summaryRepeat: "Toistuu",
      summaryDay: "päivä",
      summaryWeek: "viikko",
      summaryMonth: "kuukauden",
      summaryYear: "vuosi"
    }
  }
});

@Component({
  selector: "app-kalenteri",
  templateUrl: "./kalenteri.component.html",
  styleUrls: ["./kalenteri.component.css"],
  providers: [
    WeekService,
    AgendaService,
    DragAndDropService,
    ResizeService,
    TreeViewComponent,
    ScheduleComponent
  ]
})
export class KalenteriComponent {
  @ViewChild("scheduleObj", { static: true })
  public scheduleInstance: ScheduleComponent;
  @ViewChild("treeObj", { static: true })
  public treeObj: TreeViewComponent;
  public selectedDate: Date = new Date();
  public views: Array<string> = ["Day", "Week", "WorkWeek"];
  public showHeaderBar: Boolean = false;
  public weekFirstDay: number = 1;
  title = "kalenteri";

  public tehtavaLista: { [key: string]: Object }[] = [
    { Id: 1, Name: "ohjelmointi" },
    { Id: 2, Name: "tietokannat" },
    { Id: 3, Name: "tietokannat2" }
  ];

  public field: Object = {
    dataSource: this.tehtavaLista,
    id: "Id",
    text: "Name"
  };

  // public EventObject: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Id: 1,
  //       Subject: "Tehtävä",
  //       StartTime: new Date(),
  //       EndTime: new Date()
  //     }
  //   ]
  // };

  public onTreeDragStop(args: DragAndDropEventArgs): void {
    let cellData: CellClickEventArgs = this.scheduleInstance.getCellDetails(
      args.target
    );
    let eventData: { [key: string]: Object } = {
      Event: args.event,
      Subject: args.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: cellData.isAllDay
    };
    this.scheduleInstance.addEvent(eventData);
  }

  onResizeStart(args: ResizeEventArgs): void {
    //args.scroll.enable = true;
    args.interval = 10;
    args.scroll.scrollBy = 100;
  }
  onDragStart(args: DragEventArgs): void {
    //args.scroll.enable = true;
    args.interval = 10;
    args.scroll.scrollBy = 100;
  }
}
