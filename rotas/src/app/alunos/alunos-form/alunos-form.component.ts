import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IformDesativeGuard } from 'src/app/guards/iform-desative.guard';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IformDesativeGuard {

  aluno: any;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunoService.getAlunoDetalhes(id);

      if(this.aluno === null){
        this.aluno = {};
      }
    })
  }

  
  mudarRota(){
    confirm('pode mudar rota');
    return true;
  }

  podeDesativar() {
   return this.mudarRota(); 
  }

}
