import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent //se não exporto fica como modulo privado
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent //para exportar ele para fora do module
  ]
})
export class CursosModule { }
