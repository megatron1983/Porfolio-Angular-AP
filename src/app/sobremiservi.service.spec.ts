import { TestBed } from '@angular/core/testing';

import { SobremiserviService } from './sobremiservi.service';

describe('SobremiserviService', () => {
  let service: SobremiserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobremiserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
