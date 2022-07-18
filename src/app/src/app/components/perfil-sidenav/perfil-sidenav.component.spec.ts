import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSidenavComponent } from './perfil-sidenav.component';

describe('PerfilSidenavComponent', () => {
  let component: PerfilSidenavComponent;
  let fixture: ComponentFixture<PerfilSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
