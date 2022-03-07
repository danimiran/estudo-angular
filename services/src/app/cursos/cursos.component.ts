import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  // cursosService!: CursosService;

  constructor(private _cursosService: CursosService) {
    // this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursos = this._cursosService.getCursos();
    CursosService.criouCursoCriado.subscribe((curso) => //a chamada é diferente quando está como static
      this.cursos.push(curso)
    );
  }
}
