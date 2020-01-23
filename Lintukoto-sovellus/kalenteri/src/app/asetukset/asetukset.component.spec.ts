import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsetuksetComponent } from './asetukset.component';

describe('AsetuksetComponent', () => {
  let component: AsetuksetComponent;
  let fixture: ComponentFixture<AsetuksetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsetuksetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsetuksetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
