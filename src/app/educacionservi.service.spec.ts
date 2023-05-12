import { TestBed } from '@angular/core/testing';

import { EducacionserviService } from './educacionservi.service';

describe('EducacionserviService', () => {
  let service: EducacionserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
