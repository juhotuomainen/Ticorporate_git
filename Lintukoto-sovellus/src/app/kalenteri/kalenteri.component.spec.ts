import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { KalenteriComponent } from "./kalenteri.component";

describe("KalenteriComponent", () => {
  let component: KalenteriComponent;
  let fixture: ComponentFixture<KalenteriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KalenteriComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalenteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
