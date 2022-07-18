import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCursoComponent } from './forms-curso.component';

describe('FormsCursoComponent', () => {
  let component: FormsCursoComponent;
  let fixture: ComponentFixture<FormsCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
