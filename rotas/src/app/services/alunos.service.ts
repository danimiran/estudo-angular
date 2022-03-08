import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'alunos 1', email: 'aluno1@email.com'},
    {id: 2, nome: 'alunos 2', email: 'aluno2@email.com'},
    {id: 3, nome: 'alunos 3', email: 'aluno3@email.com'}
  ]

  getAlunos(){
    return this.alunos;
  }

  getAlunoDetalhes(id: number)
  {
    let alunos = this.getAlunos();
    for(let aluno of alunos)
    {
      if(aluno.id == id)
      {
        return aluno
      }
    }
    return null;
  }
  constructor() { }
}
