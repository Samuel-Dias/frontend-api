import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTelaPrincipalComponent } from './tabs-tela-principal.component';

describe('TabsTelaPrincipalComponent', () => {
  let component: TabsTelaPrincipalComponent;
  let fixture: ComponentFixture<TabsTelaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsTelaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTelaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
