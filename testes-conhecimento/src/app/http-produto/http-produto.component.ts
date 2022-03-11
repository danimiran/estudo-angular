import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-http-produto',
  templateUrl: './http-produto.component.html',
  styleUrls: ['./http-produto.component.css']
})
export class HttpProdutoComponent implements OnInit {

  lista: Produto[] = []; 
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listaProdutos();
  }

  listaProdutos(){
    this.pessoaService.getConsultaProduto().subscribe(produto => {
      this.lista = produto;
    })
  }

}
