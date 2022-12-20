import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';
import { Inscripcion } from '../../models/inscripcion';
import { InscripcionState } from '../../models/inscripcion.state';
import { agregarInscripcion, cargarInscripciones, eliminarInscripcion } from '../../state/inscripciones.actions';
import { selectInscripciones, selectInscripcionesCargando } from '../../state/inscripciones.selectors';


@Component({
  selector: 'app-inscripciones-crear',
  templateUrl: './inscripciones-crear.component.html',
  styleUrls: ['./inscripciones-crear.component.css']
})
export class InscripcionesCrearComponent implements OnInit {

  dataSource!: MatTableDataSource<Inscripcion>;
  cursos$!: Observable<Curso[]>;
  usuarioActivo?: Usuario;
  cursoSeleccionado!: Curso;
  columnas: string[] = ['id', 'curso', 'estudiante', 'acciones'];
  inscripciones$!: Observable<Inscripcion[]>
  cargando$!: Observable<boolean>;

  constructor(
    private storeInscripciones: Store<InscripcionState>,
    private cursosService: CursosService,
    private sesionService: SesionService,
    
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
    this.cargando$ = this.storeInscripciones.select(selectInscripcionesCargando);
  }

  ngOnInit(): void {
    
      this.storeInscripciones.select(selectInscripciones)
                             .subscribe((inscripciones: Inscripcion[]) => 
      {
         this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
      });
    
      this.cursos$ = this.cursosService.getAll()
      this.usuarioActivo = this.sesionService.sesion.usuario
      this.inscripciones$ = this.storeInscripciones.select(selectInscripciones)
      
    }
  

  inscribir(curso: Curso){
    
    if(this.usuarioActivo != undefined){
      const inscripcion: Inscripcion = {
        Id: 0,
        Curso: curso,
        IdAlumno: this.usuarioActivo.Id!
      };

      this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));
    }
  }

  // editar(inscripcion: Inscripcion){
  //   this.dialog.open(EditarDialogComponent, {
  //     width: '300px',
  //     data: inscripcion
  //   })
  // }

  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({ inscripcion}));
  }
}
