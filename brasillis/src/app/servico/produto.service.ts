// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Produto } from '../modelo/Produto';

// Importar o RxJS
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http: HttpClient) {}

  // URL da API
  url: string = 'http://localhost:3000/produtos';

  // Método para selecionar produtos
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  // Método para cadastrar produtos
  cadastrar(obj: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, obj);
  }

  // Método para alterar produtos
  alterar(obj: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remover0(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  remover(obj: Produto): Observable<any> {
    return this.http.delete<any>(`${this.url}/${obj.id}`);
  }
}
