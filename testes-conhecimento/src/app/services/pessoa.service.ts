import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  urlApi = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  getConsultaProduto(): Observable<Produto[]>{
    return this.http
      .get<Produto[]>(this.urlApi);
  }




  handleError(arg0: string, Produto: Produto): (err: any, caught: Observable<Produto[]>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
