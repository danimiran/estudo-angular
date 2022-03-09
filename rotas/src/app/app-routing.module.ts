import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CursosGuard } from './guards/cursos.guard';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoLocalizadaComponent } from './pagina-nao-localizada/pagina-nao-localizada.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('../app/cursos/cursos.module').then((mod) => mod.CursosModule),
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard]
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('../app/alunos/alunos.module').then((mod) => mod.AlunosModule),
    canActivate: [AuthGuardGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuardGuard]
  },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard],
  canLoad: [AuthGuardGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    component: PaginaNaoLocalizadaComponent,
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard],
  }, //quando não encontra a rota
  // { path: 'cursos', component: CursosComponent},
  // { path: 'curso/:id', component: CursoDetalheComponent},
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
