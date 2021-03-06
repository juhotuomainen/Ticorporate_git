import { Component } from '@angular/core';
import { AuthService } from './auth.service';

import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  AgendaService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeekService, AgendaService]
})
export class AppComponent {
  constructor(private authService: AuthService) {
  }
}
