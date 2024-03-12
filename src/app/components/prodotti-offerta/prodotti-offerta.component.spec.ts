import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiOffertaComponent } from './prodotti-offerta.component';

describe('ProdottiOffertaComponent', () => {
  let component: ProdottiOffertaComponent;
  let fixture: ComponentFixture<ProdottiOffertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottiOffertaComponent]
    });
    fixture = TestBed.createComponent(ProdottiOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
