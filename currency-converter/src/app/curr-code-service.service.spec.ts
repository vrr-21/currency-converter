import { TestBed, inject } from '@angular/core/testing';

import { CurrCodeServiceService } from './curr-code-service.service';

describe('CurrCodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrCodeServiceService]
    });
  });

  it('should be created', inject([CurrCodeServiceService], (service: CurrCodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
