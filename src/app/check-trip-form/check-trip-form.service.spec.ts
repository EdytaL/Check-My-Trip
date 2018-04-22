import { TestBed, inject } from '@angular/core/testing';

import { CheckTripFormService } from './check-trip-form.service';

describe('CheckTripFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckTripFormService]
    });
  });

  it('should be created', inject([CheckTripFormService], (service: CheckTripFormService) => {
    expect(service).toBeTruthy();
  }));
});
