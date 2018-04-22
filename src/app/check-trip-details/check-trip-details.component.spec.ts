import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTripDetailsComponent } from './check-trip-details.component';

describe('CheckTripDetailsComponent', () => {
  let component: CheckTripDetailsComponent;
  let fixture: ComponentFixture<CheckTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
