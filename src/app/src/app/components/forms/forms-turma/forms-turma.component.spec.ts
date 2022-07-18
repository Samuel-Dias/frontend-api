import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTurmaComponent } from './forms-turma.component';

describe('FormsTurmaComponent', () => {
  let component: FormsTurmaComponent;
  let fixture: ComponentFixture<FormsTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
