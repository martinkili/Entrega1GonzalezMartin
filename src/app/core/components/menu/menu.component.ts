import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sesion$!: Observable<Sesion>
  constructor(
    private autenticacionService: AutenticacionService 
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.autenticacionService.obtenerSesion();
  }

}
