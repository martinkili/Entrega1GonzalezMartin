import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { AutenticacionService } from '../../services/autenticacion.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sesion$!: Observable<Sesion>
  constructor(
    private sesionService: SesionService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  logout(){
    this.sesionService.cerrarSesion()
    this.route.navigate(["login"])
  }
}
