import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { ListaUsuarios, Usuario } from 'src/app/models/usuario';

@Injectable()
export class SesionService {

  sesion: Sesion = {
    islogged: false,
  };

  sesionSubject!: BehaviorSubject<Sesion>;
  constructor() {
    this.sesionSubject = new BehaviorSubject(this.sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }

  iniciarSesion(usuario: Usuario){
    this.sesion = {
      islogged: true,
      usuario: usuario
    }
    this.sesionSubject.next(this.sesion);
  }

  cerrarSesion(){
    
    this.sesion = {
      islogged: false,
      usuario: {}
    }
    
    this.sesionSubject.next(this.sesion);
    
  }

}
