import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loilane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature';

  valorAtual: string = '';
  valorSalvo: string = '';
  ismouseOver: boolean = false;
  
  nomeDoCurso: string = 'Angular';

  valorInicial:number = 15;

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) { //para mostrar o usuario digita no impute
    this.valorAtual = (<HTMLInputElement>evento.target).value; //vai capeturar so o value (o que é digitado)
  }

  salvarValor(valor: any) {

    this.valorSalvo = valor;
    console.log(this.valorSalvo);
  }

  onMouseOverOut()
  {
    this.ismouseOver = !this.ismouseOver;
  }


  getCurtirCurso() {
    return true;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
