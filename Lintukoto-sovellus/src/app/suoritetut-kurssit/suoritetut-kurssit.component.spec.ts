import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuoritetutKurssitComponent } from './suoritetut-kurssit.component';

describe('SuoritetutKurssitComponent', () => {
  let component: SuoritetutKurssitComponent;
  let fixture: ComponentFixture<SuoritetutKurssitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuoritetutKurssitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuoritetutKurssitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
