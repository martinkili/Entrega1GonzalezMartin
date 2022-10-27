import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ListaUsuarios, Usuario } from 'src/app/models/usuario';

@Injectable({ providedIn: 'root' })
export class AutenticacionService {

usuarios = ListaUsuarios;

usuarioSesionSubject!: BehaviorSubject<Usuario>;

  constructor() {
    const usuarioSesion: Usuario = {
      Id: 0
    };
    
    this.usuarioSesionSubject = new BehaviorSubject(usuarioSesion);
  }

  login(usuario: string, contrasena: string){

    var usuarioEncontrado = this.usuarios.filter( u  => u.Usuario == usuario && u.Contraseña == contrasena)[0]
    const sesion: Usuario = {
      Id : usuarioEncontrado.Id,
      Nombre: usuarioEncontrado.Nombre,
      Admin: usuarioEncontrado.Admin
    }
    console.log("sesion ", sesion)
    this.usuarioSesionSubject.next(sesion);
  }

  obtenerUsuarioSesion(): Observable<Usuario>{
    return this.usuarioSesionSubject.asObservable();
  }

}
