import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aluno } from '../class/Aluno';
import { AlunosService } from '../services/alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunoService: AlunosService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> | Promise<Aluno> | any {
    let id = route.params['id'];

    return this.alunoService.getAlunoDetalhes(id); //obtem antes de carregar a rota
  }
}
