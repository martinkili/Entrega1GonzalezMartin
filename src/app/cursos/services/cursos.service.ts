import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClienteHttpService } from 'src/app/core/services/cliente-http.service';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {

  constructor(
    private clienteHttp: ClienteHttpService
  ) { }

  getAll(){
    return this.clienteHttp.getAll('Cursos')
  }

  get(id: number){
    return this.clienteHttp.get('Cursos/' + id)
  }

  post(curso: Curso){
    return this.clienteHttp.post(curso, 'Cursos')
  }

  put(curso: Curso){
    return this.clienteHttp.put(curso, 'Cursos/' + curso.Id)
  }

  delete(id: number){
    return this.clienteHttp.delete('Cursos/' + id)
  }

}