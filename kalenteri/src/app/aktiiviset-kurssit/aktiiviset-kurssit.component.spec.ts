import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktiivisetKurssitComponent } from './aktiiviset-kurssit.component';

describe('AktiivisetKurssitComponent', () => {
  let component: AktiivisetKurssitComponent;
  let fixture: ComponentFixture<AktiivisetKurssitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktiivisetKurssitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktiivisetKurssitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
