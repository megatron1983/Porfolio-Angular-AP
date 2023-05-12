import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioformComponent } from './inicioform.component';

describe('InicioformComponent', () => {
  let component: InicioformComponent;
  let fixture: ComponentFixture<InicioformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
