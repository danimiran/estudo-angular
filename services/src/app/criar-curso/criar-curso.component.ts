import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService] //adiciono aqui se quero criar outra chamada para o serviço
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCursos(curso: string){
    this._cursosService.addCurso(curso);
  }


}
