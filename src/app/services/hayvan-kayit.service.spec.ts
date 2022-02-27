import { TestBed } from '@angular/core/testing';

import { HayvanKayitService } from './hayvan-kayit.service';

describe('HayvanKayitService', () => {
  let service: HayvanKayitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HayvanKayitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
