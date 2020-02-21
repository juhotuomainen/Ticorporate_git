import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenkipolloinfoComponent } from './henkipolloinfo.component';

describe('HenkipolloinfoComponent', () => {
  let component: HenkipolloinfoComponent;
  let fixture: ComponentFixture<HenkipolloinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenkipolloinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenkipolloinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
