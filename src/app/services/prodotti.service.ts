import { Injectable } from '@angular/core';
import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) { }
  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("https://fakestoreapi.com/products") // anzichè una promise (com'era in fetch e axios), torna un observable: questo vive di vita propria ed è dentro la libreria 'rxjs'. È come una promise che può ritornare dei valori più di una volta. Ho un metodo che si chiama 'subscribe' che è come una callback che può richiamare in maniera infinita.
  }
  
  getCategorie(): Observable<string[]> {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
  }


  //   getProdotti():Prodotto[] {
  //     return PRODOTTI;
  //   }
//   altri esempi per esplicitare:
//   getNumeri(): number[] {
//     return [1, 2, 3];
//   }

//   toUpper(s: string): string {
//     return s.toUpperCase();
//   }

//   saluta(): void {
//     console.log("asd");
  //   }


 }
