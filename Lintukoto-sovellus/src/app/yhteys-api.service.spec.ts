import { TestBed } from '@angular/core/testing';

import { YhteysAPIService } from './yhteys-api.service';

describe('YhteysAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YhteysAPIService = TestBed.get(YhteysAPIService);
    expect(service).toBeTruthy();
  });
});
