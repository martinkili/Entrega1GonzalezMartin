import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AutenticacionService } from '../core/services/autenticacion.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})


export class AutenticacionGuard implements CanActivate {

  constructor(
    private autenticacionService : AutenticacionService,
    private router: Router) {
  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.autenticacionService.obtenerUsuarioSesion().pipe(
        map((usuario: Usuario) => {
          console.log('guard: ', usuario)
          if(usuario.Id > 0){
            return true;
          }else{
            this.router.navigate(['login']);
            return false;
          }
        })
      );


  }
  
}
