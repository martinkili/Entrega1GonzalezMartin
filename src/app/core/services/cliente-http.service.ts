import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(endPoint: string): Observable<any[]>{
    return this.http.get<any[]>(`${environment.api}/` + endPoint, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  get(endPoint: string): Observable<any>{
    return this.http.get<any>(`${environment.api}/` + endPoint, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  post(objeto: any, endPoint: string){
    this.http.post(`${environment.api}/` + endPoint, objeto, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  postReturnObservable(objeto: any, endPoint: string) : Observable<any>{
    return this.http.post<any>(`${environment.api}/` + endPoint, objeto, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  put(objeto: any, endPoint: string){
    this.http.put<any>(`${environment.api}/` + endPoint, objeto).pipe(
      catchError(this.manejarError)
    )
  }

  putReturnObservable(objeto: any, endPoint: string){
    return this.http.put<any>(`${environment.api}/` + endPoint, objeto).pipe(
      catchError(this.manejarError)
    )
  }

  delete(endPoint: string){
    this.http.delete<any>(`${environment.api}/` + endPoint).pipe(
      catchError(this.manejarError)
    )
    alert("Registro eliminado");  
  }

  deleteReturnObservable(endPoint: string){
    return this.http.delete<any>(`${environment.api}/` + endPoint).pipe(
      catchError(this.manejarError)
    )
    
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
