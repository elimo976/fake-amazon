import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) { }
  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("https://fakestoreapi.com/products") // anzichè una promise (com'era in fetch e axios), torna un observable: questo vive di vita propria ed è dentro la libreria 'rxjs'. È come una promise, ma che può ritornare dei valori più di una volta. In definitiva, l'Observable si usa quando non ho un valore di ritorno immediato. Inoltre, ho un metodo che si chiama 'subscribe' che è come una callback che può richiamare in maniera infinita.
  }
  
  getCategorie(): Observable<string[]> {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
  }

  getProdottoById(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>("https://fakestoreapi.com/products/" +id)
  }

  getProdottiByCategoria(categoria: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("https://fakestoreapi.com/products/category/" + categoria);
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
 
// DIPENDENCY INJECTION: è quel meccanismo che fa in modo che NG istanzi degli oggetti per conto mio; in modo da avere una sola istanza all'interno di tutta la mia applicazione. In pratica, consente di fornire le dipendenze necessarie a una classe senza che essa debba creare tali dipendenze direttamente. Il sistema di dependency injection permette di definire le dipendenze di un componente o di un servizio nel costruttore della classe. Angular si occupa quindi di fornire automaticamente le istanze di queste dipendenze quando un componente o un servizio viene istanziato.

// DEFINIZIONE GENERICS: i generics vengono spesso utilizzati quando si lavora con servizi, componenti e altre costruzioni di NG per fornire sicurezza dei tipi e riusabilità nel codice dell'applicazione. Ad esempio, quando definisci servizi che lavorano con diversi tipi di dati o quando crei componenti riutilizzabili che possono renderizzare vari tipi di contenuto.
