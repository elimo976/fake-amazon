import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { PRODOTTI } from 'src/app/data/prodotti';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent {
  prodotti: Prodotto[] = PRODOTTI;

  iettaProdotto(prodotto: Prodotto) {
    let i = this.prodotti.indexOf(prodotto);

    if (i > -1) {
      this.prodotti.splice(i, 1);
    }
  }
}
