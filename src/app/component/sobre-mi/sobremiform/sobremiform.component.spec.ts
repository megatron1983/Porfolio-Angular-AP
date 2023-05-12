import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiformComponent } from './sobremiform.component';

describe('SobremiformComponent', () => {
  let component: SobremiformComponent;
  let fixture: ComponentFixture<SobremiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
