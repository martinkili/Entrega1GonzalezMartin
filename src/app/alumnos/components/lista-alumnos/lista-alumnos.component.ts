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

  //ELEMENT_DATA = new MatTableDataSource(ListaAlumnos)
  displayedColumns: string[] = ['nombre', 'email', 'detalle', 'editar', 'eliminar'];

  constructor(
    private dialog: MatDialog,
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alumnosService.getAll().subscribe((data) => (this.dataInicial = data.sort(
      (a, b) => (a.Apellidos < b.Apellidos ? -1 : 1)
      )));
  }

  openDialog(obj?: any, id?: any) {

    let dialog = this.dialog.open(
      AltaAlumnosComponent,
      {
         width: '50%',
        height: '50%',
        data : obj,
        id: id,
      });

    dialog.beforeClosed().subscribe(res => {

      if (res != undefined && res.data != undefined){
        if(res.id > 0){
          this.editar(res.data, res.id)
        }else{
          this.alta(res.data)
        }
      }

    })

  }
      

  alta(row_obj: any){
    this.dataInicial.push({
      id: this.dataInicial.length + 1,
      ... row_obj,
    });

    //this.ELEMENT_DATA.data = this.dataInicial
  }

  editar(row_obj: any, row_id: any){
    
    // let position = this.dataInicial.findIndex(alumno => alumno.id == row_id)
    // this.dataInicial[position].apellido = row_obj.apellido
    // this.dataInicial[position].nombre = row_obj.nombre
    // this.dataInicial[position].edad = row_obj.edad
    
  }

  eliminar(id: number) {
    // let position = this.dataInicial.findIndex(alumno => alumno.id == id)
    // this.dataInicial.splice(position, 1)
    // this.ELEMENT_DATA.data = this.dataInicial
  }

  detalle(id: number){

    this.router.navigate(["Alumnos/Detalle/" + id])
  }
}
