import { TestBed } from '@angular/core/testing';

import { ContactoServiService } from './contacto-servi.service';

describe('ContactoServiService', () => {
  let service: ContactoServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
