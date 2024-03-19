import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotti-categoria',
  templateUrl: './prodotti-categoria.component.html',
  styleUrls: ['./prodotti-categoria.component.css']
})
export class ProdottiCategoriaComponent implements OnInit {
  prodotti: Prodotto[] = [];
  categoria: string="";

  constructor(private ps: ProdottiService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const cat = this.route.snapshot.paramMap.get("cat");
    this.categoria = cat!;
    this.ps.getProdottiByCategoria(cat!)
      .subscribe(dati => this.prodotti = dati);
  }
}
