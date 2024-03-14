import { Component, OnDestroy, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';
// import { PRODOTTI } from 'src/app/data/prodotti';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit, OnDestroy {
  // prodotti: Prodotto[] = PRODOTTI;
  prodotti: Prodotto[] = [];

  constructor(private prodottoService: ProdottiService) {

  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this.prodottoService.getProdotti()
      .subscribe(dati => {
         this.prodotti = dati; // cfr. il then della promise
       });
  }

  // constructor(private prodottoService: ProdottiService) {
  //    let prodottoService = new ProdottiService()
  //    this.prodotti = prodottoService.getProdotti(); così mi ritorna un array di prodotti, così come lo avevo precedentemente preparato. 
  // }


  rimuoviProdotto(prodotto: Prodotto) {
    let i = this.prodotti.indexOf(prodotto);

    if (i > -1) {
      this.prodotti.splice(i, 1);
    }
  }
}
