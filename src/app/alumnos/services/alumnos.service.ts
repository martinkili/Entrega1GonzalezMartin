import { Injectable } from "@angular/core";
import { ClienteHttpService } from "src/app/core/services/cliente-http.service";
import { Alumno } from "src/app/models/alumno";

@Injectable()

export class AlumnosService {

  constructor(
    private clienteHttp: ClienteHttpService
  ) { }


  getAll(){
    return this.clienteHttp.getAll('Alumnos')
  }

  get(id: number){
    return this.clienteHttp.get('Alumnos/' + id)
  }

  post(alumno: Alumno){
    return this.clienteHttp.post(alumno, 'Alumnos')
  }

}
