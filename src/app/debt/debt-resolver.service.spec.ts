import { TestBed, inject } from '@angular/core/testing';

import { DebtResolverService } from './debt-resolver.service';

describe('DebtResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtResolverService]
    });
  });

  it('should be created', inject([DebtResolverService], (service: DebtResolverService) => {
    expect(service).toBeTruthy();
  }));
});
