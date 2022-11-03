import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AltaAlumnosComponent } from '../alta-alumnos/alta-alumnos.component';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnosDetalleComponent } from '../alumnos-detalle/alumnos-detalle.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  dataInicial!: Alumno[];
  listaAlumnos!: MatTableDataSource<Alumno>

  //ELEMENT_DATA = new MatTableDataSource(ListaAlumnos)
  displayedColumns: string[] = ['nombre', 'detalle', 'editar', 'eliminar'];

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
        width: '50%',
        height: '50%',
        data : obj,
        id: id,
      }
    )

    dialog.afterClosed().subscribe(() => this.getAll())

  }
      
  getAll(){
    this.alumnosService.getAll().subscribe((data) => 
    (this.dataInicial = data.sort((a, b) => (a.Apellidos < b.Apellidos ? -1 : 1)))
    );
  }

  
  eliminar(id: number) {
    this.alumnosService.delete(id)
    this.getAll()
  }

  detalle(id: number){
    this.router.navigate(["Alumnos/Detalle/" + id])
  }
}
