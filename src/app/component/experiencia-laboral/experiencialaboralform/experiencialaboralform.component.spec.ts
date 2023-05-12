import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencialaboralformComponent } from './experiencialaboralform.component';

describe('ExperiencialaboralformComponent', () => {
  let component: ExperiencialaboralformComponent;
  let fixture: ComponentFixture<ExperiencialaboralformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencialaboralformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencialaboralformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
