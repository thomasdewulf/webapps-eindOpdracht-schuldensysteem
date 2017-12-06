import { TestBed, inject } from '@angular/core/testing';

import { DebtDataService } from './debt-data.service';

describe('DebtDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtDataService]
    });
  });

  it('should be created', inject([DebtDataService], (service: DebtDataService) => {
    expect(service).toBeTruthy();
  }));
});
