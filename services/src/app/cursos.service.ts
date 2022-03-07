import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>(); //PARA ELE NOTIFICAR SEMPRE QUE TIVER UMA MUDANÇA
  static criouCursoCriado = new EventEmitter<string>(); //com o static não preciso da instancia (sendo compartilhada entre as instancias)

  private cursos: string[] = ['HTML', 'ANGULAR', 'JS'];

  constructor(private _logService: LogService) {
    console.log('CursosService');
   }

  getCursos(){
    this._logService.consoleLog('obtendo lista de Cursos')
    return this.cursos;
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Criando novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouCursoCriado.emit(curso);
  }
}
