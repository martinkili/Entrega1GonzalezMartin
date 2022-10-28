import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>('https://635b1749aa7c3f113db5b06a.mockapi.io/cursos', {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'uUTF-8'
      })
    })
  }
}
