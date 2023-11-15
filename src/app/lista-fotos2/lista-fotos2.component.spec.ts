import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFotos2Component } from './lista-fotos2.component';

describe('ListaFotos2Component', () => {
  let component: ListaFotos2Component;
  let fixture: ComponentFixture<ListaFotos2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFotos2Component]
    });
    fixture = TestBed.createComponent(ListaFotos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
