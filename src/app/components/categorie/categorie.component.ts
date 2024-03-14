import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie: string[] = [];

  constructor(private prodottiService: ProdottiService) {

  }
  ngOnInit(): void {
    this.prodottiService.getCategorie()
      .subscribe(categorie => {
        this.categorie = categorie;
    })
  }
}
