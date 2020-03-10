import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesaComponent } from './pesa.component';

describe('PesaComponent', () => {
  let component: PesaComponent;
  let fixture: ComponentFixture<PesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
