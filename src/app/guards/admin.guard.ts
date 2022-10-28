import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from '../core/services/sesion.service';
import { Sesion } from '../models/sesion';

@Injectable() 


export class AdminGuard implements CanActivate {

  constructor(
    private sesionService : SesionService,

   ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.sesionService.obtenerSesion().pipe(

        map((s: Sesion) => { 
          
          if (s.usuario?.Admin){
              return true;
            }else{
              alert("El usuario debe ser administrador")
              return false;
            }
        })
      )
  }
}
