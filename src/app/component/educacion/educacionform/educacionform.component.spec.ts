import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionformComponent } from './educacionform.component';

describe('EducacionformComponent', () => {
  let component: EducacionformComponent;
  let fixture: ComponentFixture<EducacionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
