import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesformComponent } from './habilidadesform.component';

describe('HabilidadesformComponent', () => {
  let component: HabilidadesformComponent;
  let fixture: ComponentFixture<HabilidadesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
