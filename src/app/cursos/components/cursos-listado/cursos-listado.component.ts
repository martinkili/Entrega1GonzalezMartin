import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-listado',
  templateUrl: './cursos-listado.component.html',
  styleUrls: ['./cursos-listado.component.css']
})
export class CursosListadoComponent implements OnInit {

  cursos$!: Observable<Curso[]>
  usuarioActivo?: Usuario;

  constructor(
    private cursoService: CursosService,
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioActivo = this.sesionService.sesion.usuario
    this.getAll();
  }

  getAll(){
    this.cursos$ = this.cursoService.getAll()
  }

  put(id: number){
    this.router.navigate(['Cursos/Editar/' + id])
  }

  delete(id: number){

   if (this.usuarioActivo?.Admin){

    if (confirm("Seguro de eliminar el curso?")){
      this.cursoService.delete(id)
      this.getAll()
    }

   }else{
      alert("El usuario debe ser administrador")
   }

    
  }

}
