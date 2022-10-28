import { Injectable } from '@angular/core';
import { ListaUsuarios, Usuario } from 'src/app/models/usuario';
import { SesionService } from './sesion.service';

@Injectable() 
export class AutenticacionService {

usuarios = ListaUsuarios;

  constructor(
    private sesionService : SesionService
  ) {}

  login(usuario: string, contrasena: string) : boolean {

    var usuarioEncontrado = this.usuarios.filter( u  => u.Usuario == usuario && u.Contraseña == contrasena)[0]

    if (usuarioEncontrado != null){

      this.sesionService.iniciarSesion(usuarioEncontrado)
      return true
    }

    return false
    
  }

}
