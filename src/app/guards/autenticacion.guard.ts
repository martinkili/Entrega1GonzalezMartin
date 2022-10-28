import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  UrlTree } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { AutenticacionService } from '../core/services/autenticacion.service';
import { Sesion } from '../models/sesion';
import { Usuario } from '../models/usuario';

@Injectable()


export class AutenticacionGuard implements CanActivate {

  constructor(
    private autenticacionService : AutenticacionService,
    private router: Router) {
  
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.autenticacionService.obtenerSesion().pipe(

        map((s: Sesion) => { 
          
          if (s.islogged){
              console.log(s)
              return true;
            }else{
              this.router.navigate(['login'])
              return false;
            }
        
        })

      )

  }
  
}
