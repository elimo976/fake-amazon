import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo, ArticoloAddDTO } from '../models/articolo';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private serverBaseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getArticoli() : Observable<Articolo[]>{
    return this.http.get<Articolo[]>(this.serverBaseUrl + "/articoli");
  }

  getArticoloById(id: number) : Observable<Articolo>{
    return this.http.get<Articolo>(this.serverBaseUrl + "/articoli/" + id);
  }

  addArticolo(articolo: ArticoloAddDTO): Observable<Articolo> {
    return this.http.post<Articolo>(this.serverBaseUrl + "/articoli", articolo); // articolo all'interno dell'indirizzo è il body
  }

  deleteArticoloById(id: number): Observable<any>{
    return this.http.delete(this.serverBaseUrl + "/articoli/" + id);
  }
}
