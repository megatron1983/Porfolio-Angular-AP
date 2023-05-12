import { TestBed } from '@angular/core/testing';

import { HabilidadserviService } from './habilidadservi.service';

describe('HabilidadserviService', () => {
  let service: HabilidadserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
