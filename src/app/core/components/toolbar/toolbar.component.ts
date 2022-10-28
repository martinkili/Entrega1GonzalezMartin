import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usuarioSesion$!: Observable<Usuario>;

  constructor(
    private autenticacionService: AutenticacionService 
  ) { }

  ngOnInit(): void {
    this.usuarioSesion$ = this.autenticacionService.obtenerUsuarioSesion();
  }

}
