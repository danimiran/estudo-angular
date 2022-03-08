import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css'],
})
export class AlunosDetalheComponent implements OnInit {
 
  aluno?: any;
  inscricao?: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.getDetalhes(id);
    });
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }

  getDetalhes(id: number) {
   return this.alunosService.getAlunoDetalhes(id);
  }
}
