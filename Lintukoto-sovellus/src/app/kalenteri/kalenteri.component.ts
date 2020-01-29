declare var require: any;

import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { extend, closest } from '@syncfusion/ej2-base';

import {
  TreeViewComponent,
  DragAndDropEventArgs
} from '@syncfusion/ej2-angular-navigations';

import {
  WeekService,
  AgendaService,
  DragAndDropService,
  DragEventArgs,
  ResizeService,
  CellClickEventArgs,
  ScheduleComponent,
  ResizeEventArgs
} from '@syncfusion/ej2-angular-schedule';

import {
  GridComponent,
  RowDDService,
  EditService,
  EditSettingsModel,
  RowDropSettingsModel,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';

import { loadCldr, L10n } from '@syncfusion/ej2-base';
/*import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';*/

loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fi/ca-gregorian.json'),
  require('cldr-data/main/fi/numbers.json'),
  require('cldr-data/main/fi/timeZoneNames.json')
);

// Käännös suomeksi
L10n.load({
  fi: {
    schedule: {
      day: 'Päivä',
      week: 'Viikko',
      month: 'Kuukausi',
      today: 'Tänään',
      noEvents: 'Ei tapahtumia',
      emptyContainer: 'Tälle päivälle ei ole tapahtumia.',
      allDay: 'Koko päivä',
      start: 'Aloitus',
      end: 'Lopetus',
      more: 'lisää',
      close: 'Sulje',
      cancel: 'Peruuta',
      noTitle: '(Ei otsikkoa)',
      delete: 'Poista',
      deleteEvent: 'Poista tapahtuma',
      deleteMultipleEvent: 'Poista monia tapahtumia',
      selectedItems: 'Valitut kohteet',
      deleteSeries: 'Poista sarja',
      edit: 'Muokkaa',
      editSeries: 'Muokkaa sarjaa',
      editEvent: 'Muokkaa tapahtumaa',
      createEvent: 'Luo tapahtuma',
      subject: 'Aihe',
      addTitle: 'Lisää otsikko',
      moreDetails: 'Näytä enemmän',
      save: 'Tallenna',
      editContent: 'Haluatko muokata vain tätä tapahtumaa vai koko sarjaa?',
      deleteRecurrenceContent:
        'Haluatko poistaa vain tämän tapahtuman vai koko sarjan?',
      deleteContent: 'Oletko varma että haluat poistaa tämän tapahtuman?',
      deleteMultipleContent:
        'Oletko varma että haluat poistaa nämä tapahtumat?',
      newEvent: 'Uusi tapahtuma',
      title: 'Otsikko',
      location: 'Sijainti',
      description: 'kuvaus',
      timezone: 'Aikavyöhyke',
      startTimezone: 'Aloitus aikavyöhyke',
      endTimezone: 'Lopetus aikavyöhyke',
      repeat: 'Toisto',
      saveButton: 'Tallenna',
      cancelButton: 'Peruuta',
      deleteButton: 'Poista',
      recurrence: 'Toistuminen',
      wrongPattern: 'Toistokuvio ei kelpaa.',
      seriesChangeAlert:
        'Tämän sarjan tiettyihin ilmentymiin tehdyt muutokset peruutetaan ja kyseiset tapahtumat vastaavat sarjaa uudelleen.',
      createError:
        // tslint:disable-next-line: max-line-length
        'Tapahtuman keston on oltava lyhyempi kuin kuinka usein se tapahtuu. Lyhennä kestoa tai muuta toistuvuuskuviota toistotapahtumaeditorissa.',
      recurrenceDateValidation:
        // tslint:disable-next-line: max-line-length
        'Joissakin kuukausissa on vähemmän kuin valittu päivämäärä. Näiden kuukausien aikana tapahtuma laskee kuukauden viimeisenä päivänä.',
      sameDayAlert:
        'Kaksi saman tapahtuman tapahtumaa ei voi tapahtua samana päivänä.',
      editRecurrence: 'Muokkaa toistuvuutta',
      repeats: 'Toistuu',
      alert: 'HUOMIO',
      startEndError: 'Valittu lopetuspäivämäärä tapahtuu ennen aloituspäivää.',
      invalidDateError: 'Annettu päivämääräarvo on virheellinen.',
      ok: 'Ok',
      occurrence: 'Esiintyminen',
      series: 'Sarja',
      previous: 'Edellinen',
      next: 'Seuraava',
      timelineDay: 'Päivän aikajana',
      timelineWeek: 'Viikon aikajana',
      timelineWorkWeek: 'Työviikon aikajana',
      timelineMonth: 'Kuukauden aikajana'
    },
    recurrenceeditor: {
      none: 'Ei mitään',
      daily: 'Päivittäin',
      weekly: 'Viikottain',
      monthly: 'Kuukausittain',
      month: 'Kuukausi',
      yearly: 'Vuosittainen',
      never: 'Ei ikinä',
      until: 'Päättyy',
      count: 'Laskuri',
      first: 'ensimmäinen',
      second: 'toinen',
      third: 'kolmas',
      fourth: 'neljäs',
      last: 'viimeinen',
      repeat: 'Toista',
      repeatEvery: 'Toista joka',
      on: 'Toista',
      end: 'Lopetus',
      onDay: 'Päivänä',
      days: 'Päivä',
      weeks: 'Viikko',
      months: 'Kuukausi',
      years: 'Vuosi',
      every: 'joka',
      summaryTimes: 'kertaa',
      summaryOn: '',
      summaryUntil: 'päättyy',
      summaryRepeat: 'Toistuu',
      summaryDay: 'päivä',
      summaryWeek: 'viikko',
      summaryMonth: 'kuukauden',
      summaryYear: 'vuosi'
    }
  }
});

@Component({
  selector: 'app-kalenteri',
  templateUrl: './kalenteri.component.html',
  styleUrls: ['./kalenteri.component.css'],
  providers: [
    WeekService,
    AgendaService,
    DragAndDropService,
    ResizeService,
    TreeViewComponent,
    ScheduleComponent
  ]
})
export class KalenteriComponent implements OnInit {

  title = 'kalenteri';

  @ViewChild('scheduleObj', { static: true })
  public scheduleInstance: ScheduleComponent;
  @ViewChild('gridObj', { static: true })
  public gridObj: GridComponent;

  public selectedDate: Date = new Date();
  public views: Array<string> = ['Week'];
  public showHeaderBar: Boolean = true;
  public weekFirstDay = 1;

  public tehtavaLista: { [key: string]: Object }[] = [
    {
      Id: 1,
      Name: 'Ohjelmointi',
      Description: 'Ohjelmointi tehtävä 63 ja 43',
      Subject: 'Ohjelmointi'
    },
    {
      Id: 2,
      Name: 'Tietokannat',
      Description: 'Tee tehtävä 13',
      Subject: 'Tietokannat'
    },
    {
      Id: 3,
      Name: 'Tietokannat2',
      Description: 'Tee tehtävät 6, 7, 8',
      Subject: 'Tietokannat 2'
    },
    {
      Id: 4,
      Name: 'Ohjelmointi',
      Description: 'Ohjelmointi tehtävä 5 ja 6',
      Subject: 'Ohjelmointi'
    },
    {
      Id: 5,
      Name: 'Tietokannat',
      Description: 'Tee tehtävä 41',
      Subject: 'Tietokannat'
    },
    {
      Id: 6,
      Name: 'Tietokannat2',
      Description: 'Tee tehtävät 9, 10, 11',
      Subject: 'Tietokannat 2'
    },
    {
      Id: 7,
      Name: 'Ohjelmointi',
      Description: 'Ohjelmointi tehtävä 13 ja 14',
      Subject: 'Ohjelmointi'
    },
    {
      Id: 8,
      Name: 'Tietokannat',
      Description: 'Tee tehtävä 7',
      Subject: 'Tietokannat'
    },
    {
      Id: 9,
      Name: 'Tietokannat2',
      Description: 'Tee tehtävät 16, 437, 28',
      Subject: 'Tietokannat 2'
    }
  ];

  public field: Object = {
    dataSource: this.tehtavaLista,
    Id: 'Id',
    Text: 'Name',
    Description: 'Description',
    Subject: 'Subject'
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

  /*
  public onTreeDragStop(args: DragAndDropEventArgs): void {
    const cellData: CellClickEventArgs = this.scheduleInstance.getCellDetails(
      args.target
    );
    const eventData: { [key: string]: Object } = {
      Event: args.event,
      Subject: args.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: cellData.isAllDay
    };
    this.scheduleInstance.addEvent(eventData);
    //this.treeObj.(args.target);
  }
*/

  // grid data
  public gridDS: Object = this.tehtavaLista;
  public allowDragAndDrop = true;
  public srcDropOptions: RowDropSettingsModel = { targetID: 'Schedule' };
  public primaryKeyVal = true;
  public editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };

  // grid toolbar
  public toolbar: ToolbarItems[];
  ngOnInit(): void {
    this.toolbar = ['Add', 'Search'];
  }

  // Viikon numeron sijasta Viikko + numero
  onRenderCell(args): void {
    if (args.elementType === 'emptyCells') {
      const weekNumber = args.element.querySelector('.e-week-number span')
        .innerText;
      args.element.querySelector('.e-week-number span').innerText =
        'Viikko ' + weekNumber;
    }
  }

  onRowDrag(event: any): void {
    event.cancel = true;
  }

  onDragStop(event: any): void {
    event.cancel = true;
    const scheduleElement: Element = (
      closest(event.target, '.e-content-wrap')
    ) as Element;
    if (scheduleElement) {
      if (event.target.classList.contains('e-work-cells')) {
        const filteredData: Object = event.data;
        const cellData: CellClickEventArgs = this.scheduleInstance.getCellDetails(
          event.target
        );
        const eventData: { [key: string]: Object } = {
          Id: filteredData[0].Id,
          Name: filteredData[0].Name,
          Title: filteredData[0].Title,
          Subject: filteredData[0].Subject,
          StartTime: cellData.startTime,
          EndTime: cellData.endTime,
          IsAllDay: cellData.isAllDay,
          Description: filteredData[0].Description
        };
        this.scheduleInstance.addEvent(eventData);
        // this.scheduleObj.openEditor(eventData, 'Add', true);
        this.gridObj.deleteRecord(event.data[0]);
      }
    }
  }

  onResizeStart(args: ResizeEventArgs): void {
    // args.scroll.enable = true;
    args.interval = 10;
    args.scroll.scrollBy = 100;
  }
  onDragStart(args: DragEventArgs): void {
    // args.scroll.enable = true;
    args.interval = 10;
    args.scroll.scrollBy = 100;
  }
}
