import { Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ListaUsuarios, Usuario } from 'src/app/models/usuario';
import { Sesion } from 'src/app/models/sesion';

@Injectable() //{ providedIn: 'root' }
export class AutenticacionService {

usuarios = ListaUsuarios;
sesion: Sesion = {
  islogged: false,
};
sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    this.sesionSubject = new BehaviorSubject(this.sesion);
  }

  login(usuario: string, contrasena: string){

    
    var usuarioEncontrado = this.usuarios.filter( u  => u.Usuario == usuario && u.Contraseña == contrasena)[0]

    if (usuarioEncontrado != null){

      this.sesion = {

        islogged: true,
        usuario: usuarioEncontrado
        
      }

    }
    
    
    this.sesionSubject.next(this.sesion);
    
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }

}
