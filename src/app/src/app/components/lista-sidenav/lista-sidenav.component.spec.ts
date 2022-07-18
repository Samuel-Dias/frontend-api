import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSidenavComponent } from './lista-sidenav.component';

describe('ListaSidenavComponent', () => {
  let component: ListaSidenavComponent;
  let fixture: ComponentFixture<ListaSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
