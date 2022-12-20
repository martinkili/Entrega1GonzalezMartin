import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../models/inscripcion';
import { environment } from 'src/environments/environment';
import { ClienteHttpService } from 'src/app/core/services/cliente-http.service';

@Injectable(
  //{providedIn: 'root'}
)
export class InscripcionesService {

  constructor(
    private clienteHttp: ClienteHttpService
  ) { }

  getAll() {
    return this.clienteHttp.getAll('Inscripciones')
  }

  post(inscripcion: Inscripcion){
    return this.clienteHttp.postReturnObservable(inscripcion, 'Inscripciones')
  }

  put(inscripcion: Inscripcion){
    return this.clienteHttp.putReturnObservable(inscripcion,'Inscripciones');
  }

  delete(inscripcion: Inscripcion){
    return this.clienteHttp.deleteReturnObservable('Inscripciones/' + inscripcion.Id)
  }

}