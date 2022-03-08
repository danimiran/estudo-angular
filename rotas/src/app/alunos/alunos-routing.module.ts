import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';


const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent , children: [ //rotas filhas
    { path: 'novo', component: AlunosFormComponent},
    { path: ':id', component: AlunosDetalheComponent},
    { path: ':id/edit', component: AlunosFormComponent},
  ]},
 

];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)], //mudo a rota para forChild (pois não é a rota raiz)
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
