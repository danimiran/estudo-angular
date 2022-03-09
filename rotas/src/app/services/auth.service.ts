import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router ) { 
  }

  private usuarioAuth: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>(); //emissor de evento

  fazerLogin(usuario: Usuario)
  {
    if(usuario.nome === "usuario@email.com" && usuario.senha === "123456")
    {

      this.usuarioAuth = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
      console.log('true');
    }
    else {
      this.usuarioAuth = false;
      this.mostrarMenuEmitter.emit(false);
      console.log('false');
    }
  }

  usuarioAuntenticado(){
    return this.usuarioAuth;
  }
  
}
