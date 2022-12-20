import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AltaAlumnosComponent } from '../alta-alumnos/alta-alumnos.component';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnosDetalleComponent } from '../alumnos-detalle/alumnos-detalle.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  dataInicial!: Alumno[];
  displayedColumns: string[] = ['nombre', 'acciones'] //detalle', 'editar', 'eliminar'];

  constructor(
    private dialog: MatDialog,
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  openDialog(obj?: any, id?: any) {

    let dialog = this.dialog.open(
      AltaAlumnosComponent,      
      {
        data : obj,
        id: id,
      }
    )
      
    dialog.afterClosed().subscribe(() => this.getAll())

  }
      
  getAll(){

    this.dataInicial = [];
    this.alumnosService.getAll().subscribe((data) => 
      (this.dataInicial = data)
    );

  }

  
  eliminar(id: number) {

    if (confirm("Seguro de eliminar el alumno?")){
      this.alumnosService.delete(id)
      this.getAll()
    }
    
  }

  detalle(id: number){
    this.router.navigate(["Alumnos/Detalle/" + id])
  }
}
