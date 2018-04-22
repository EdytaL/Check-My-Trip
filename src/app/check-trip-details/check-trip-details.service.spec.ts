import { TestBed, inject } from '@angular/core/testing';

import { CheckTripDetailsService } from './check-trip-details.service';

describe('CheckTripDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckTripDetailsService]
    });
  });

  it('should be created', inject([CheckTripDetailsService], (service: CheckTripDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
