import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrls: ['./prodotto-detail.component.css']
})
export class ProdottoDetailComponent implements OnInit{
  prodotto?: Prodotto;
  constructor(private ps: ProdottiService, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {

    // http:loalhost:4200?prodotto/8
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);

    // chiamata ajax per recuperare il singolo prodotto
    this.ps.getProdottoById(id)
      .subscribe(dati => this.prodotto = dati);
  }
}
