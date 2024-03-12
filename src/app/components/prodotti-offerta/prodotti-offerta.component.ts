import { Component } from '@angular/core';
import { PRODOTTI_IN_OFFERTA } from 'src/app/data/prodotti';
import { Prodotto } from 'src/app/models/prodotto';

@Component({
  selector: 'app-prodotti-offerta',
  templateUrl: './prodotti-offerta.component.html',
  styleUrls: ['./prodotti-offerta.component.css']
})
export class ProdottiOffertaComponent {
  prodotti: Prodotto[] = PRODOTTI_IN_OFFERTA;
}
