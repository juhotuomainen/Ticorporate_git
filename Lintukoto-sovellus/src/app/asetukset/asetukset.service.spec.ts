import { TestBed } from '@angular/core/testing';

import { AsetuksetService } from './asetukset.service';

describe('AsetuksetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsetuksetService = TestBed.get(AsetuksetService);
    expect(service).toBeTruthy();
  });
});
