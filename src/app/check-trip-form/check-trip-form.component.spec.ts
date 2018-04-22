import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTripFormComponent } from './check-trip-form.component';

describe('CheckTripFormComponent', () => {
  let component: CheckTripFormComponent;
  let fixture: ComponentFixture<CheckTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
