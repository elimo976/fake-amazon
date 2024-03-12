import { Component } from '@angular/core';
import {Prodotto, Rating} from './models/prodotto'
import { PRODOTTI } from './data/prodotti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';

  ratingTrustPilot: Rating = {
    count: 799, rate: 4.9
  }

  prodottoDelMese: Prodotto = PRODOTTI[3];
}
