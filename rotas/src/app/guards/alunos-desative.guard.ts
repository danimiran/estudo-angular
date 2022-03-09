import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IformDesativeGuard } from './iform-desative.guard';

@Injectable({
  providedIn: 'root'
})
export class AlunosDesativeGuard implements CanDeactivate<IformDesativeGuard> {
  canDeactivate(
    component: IformDesativeGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('desativada');

    // return component.mudarRota();
    return component.podeDesativar();
  }
  
}
