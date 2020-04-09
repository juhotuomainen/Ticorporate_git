import { TestBed } from '@angular/core/testing';

import { KurssiService } from './kurssi.service';

describe('KurssiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KurssiService = TestBed.get(KurssiService);
    expect(service).toBeTruthy();
  });
});
