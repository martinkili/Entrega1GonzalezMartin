import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ListaUsuarios, Usuario } from 'src/app/models/usuario';

@Injectable({ providedIn: 'root' })
export class AutenticacionService {

usuarios = ListaUsuarios;

usuarioSesionSubject!: BehaviorSubject<Usuario>;

  constructor() {
    const usuarioSesion: Usuario = {}
    
    this.usuarioSesionSubject = new BehaviorSubject(usuarioSesion);
  }

  login(usuario: string, contrasena: string){

    var usuarioEncontrado = this.usuarios.filter( u  => u.Usuario == usuario && u.Contraseña == contrasena)[0]
    console.log(usuarioEncontrado);
    const usuarioSesion: Usuario = {
      Id : usuarioEncontrado.Id,
      Nombre: usuarioEncontrado.Nombre,
      Admin: usuarioEncontrado.Admin
    }
    console.log("sesion ", usuarioSesion)
    this.usuarioSesionSubject.next(usuarioSesion);
  }

  obtenerUsuarioSesion(): Observable<Usuario>{
    return this.usuarioSesionSubject.asObservable();
  }

}
