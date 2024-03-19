import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiCategoriaComponent } from './prodotti-categoria.component';

describe('ProdottiCategoriaComponent', () => {
  let component: ProdottiCategoriaComponent;
  let fixture: ComponentFixture<ProdottiCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottiCategoriaComponent]
    });
    fixture = TestBed.createComponent(ProdottiCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
