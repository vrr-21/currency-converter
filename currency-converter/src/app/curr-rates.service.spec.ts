import { TestBed, inject } from '@angular/core/testing';

import { CurrRatesService } from './curr-rates.service';

describe('CurrRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrRatesService]
    });
  });

  it('should be created', inject([CurrRatesService], (service: CurrRatesService) => {
    expect(service).toBeTruthy();
  }));
});
