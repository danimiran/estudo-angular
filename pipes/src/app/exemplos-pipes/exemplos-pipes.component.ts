import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';


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

  livros: string[] = ['Angular', 'JS'];
  filtro: string = '';

  obterCursos(){

    if(this.livros.length == 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(filtro => {
      if (filtro.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  //filtro async

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000).subscribe(x => console.log('teste'));


  constructor() { }

  ngOnInit(): void {
  }

}
