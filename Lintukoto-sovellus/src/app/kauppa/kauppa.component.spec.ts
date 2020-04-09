import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KauppaComponent } from './kauppa.component';

describe('KauppaComponent', () => {
  let component: KauppaComponent;
  let fixture: ComponentFixture<KauppaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KauppaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KauppaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
