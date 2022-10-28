import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  UrlTree } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { SesionService } from '../core/services/sesion.service';
import { Sesion } from '../models/sesion';

@Injectable()


export class AutenticacionGuard implements CanActivate {

  constructor(
    private sesionService : SesionService,
    private router: Router) {
  
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.sesionService.obtenerSesion().pipe(

        map((s: Sesion) => { 
          
          if (s.islogged){
              return true;
            }else{
              this.router.navigate(['login'])
              return false;
            }
        })
      )
  }
}
