import { TestBed } from '@angular/core/testing';

import { PersonaserviService } from './personaservi.service';

describe('PersonaserviService', () => {
  let service: PersonaserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
