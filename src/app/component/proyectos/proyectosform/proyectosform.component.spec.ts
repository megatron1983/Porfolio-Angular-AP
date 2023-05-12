import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosformComponent } from './proyectosform.component';

describe('ProyectosformComponent', () => {
  let component: ProyectosformComponent;
  let fixture: ComponentFixture<ProyectosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
