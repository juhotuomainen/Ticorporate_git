import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirjautuminenComponent } from './kirjautuminen.component';

describe('KirjautuminenComponent', () => {
  let component: KirjautuminenComponent;
  let fixture: ComponentFixture<KirjautuminenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirjautuminenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirjautuminenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
