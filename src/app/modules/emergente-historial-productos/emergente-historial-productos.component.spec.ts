import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenteHistorialProductosComponent } from './emergente-historial-productos.component';

describe('EmergenteHistorialProductosComponent', () => {
  let component: EmergenteHistorialProductosComponent;
  let fixture: ComponentFixture<EmergenteHistorialProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergenteHistorialProductosComponent]
    });
    fixture = TestBed.createComponent(EmergenteHistorialProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
