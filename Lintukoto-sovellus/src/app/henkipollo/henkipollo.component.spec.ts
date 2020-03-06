import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenkipolloComponent } from './henkipollo.component';

describe('HenkipolloComponent', () => {
  let component: HenkipolloComponent;
  let fixture: ComponentFixture<HenkipolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenkipolloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenkipolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
