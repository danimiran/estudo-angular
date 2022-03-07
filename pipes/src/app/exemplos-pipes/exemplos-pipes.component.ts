import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Nome Livro',
    numeroPaginas: 314,
    preco: 34.70,
    dataLancamento: new Date(2014, 5, 21)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
