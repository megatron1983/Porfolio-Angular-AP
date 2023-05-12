import { TestBed } from '@angular/core/testing';

import { ExperiencialabolarserviService } from './experiencialabolarservi.service';

describe('ExperiencialabolarserviService', () => {
  let service: ExperiencialabolarserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencialabolarserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
