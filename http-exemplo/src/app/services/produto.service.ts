import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../modules/model/Produto';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto> {

 
}
