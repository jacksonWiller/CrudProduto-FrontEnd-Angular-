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
      public getAllProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseURL);
      }
    
      public getEventosByNome(tema: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseURL}/getByTema/${tema}`);
      }
    
      public getPeodutoById(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.baseURL}/${id}`);
      }

      public postProduto(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseURL, produto);
      }

      public putProduto(id: number ,produto: Produto): Observable<Produto> {
        return this.http.put<Produto>(`${this.baseURL}/${id}`, produto);
      }

      public deleteProduto(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/${id}`);
      }
}
