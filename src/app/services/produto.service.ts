import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseURL = 'https://localhost:5001/api/Produto';

    constructor(private http: HttpClient) { }

    //observibles
      getAllProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseURL);
      }
    
      getEventosByNome(tema: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseURL}/getByTema/${tema}`);
      }
    
      getPeodutoById(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.baseURL}/${id}`);
      }
}
