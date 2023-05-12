import { TestBed } from '@angular/core/testing';

import { ProyectoserviService } from './proyectoservi.service';

describe('ProyectoserviService', () => {
  let service: ProyectoserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
