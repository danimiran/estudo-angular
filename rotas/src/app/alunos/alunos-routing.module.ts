import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';
import { AlunosDesativeGuard } from '../guards/alunos-desative.guard';
import { CursosGuard } from '../guards/cursos.guard';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [CursosGuard],
    children: [
      //posso criar um generico ou expecifico children: [ //rotas filhas
      { path: 'novo', component: AlunosFormComponent },
      { path: ':id', component: AlunosDetalheComponent, resolve: {aluno: AlunoDetalheResolver} },
      {
        path: ':id/edit',
        component: AlunosFormComponent,
        canDeactivate: [AlunosDesativeGuard], //passar o guard
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)], //mudo a rota para forChild (pois não é a rota raiz)
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
