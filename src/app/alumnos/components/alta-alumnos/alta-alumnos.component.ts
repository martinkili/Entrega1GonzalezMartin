import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.css']
})

export class AltaAlumnosComponent implements OnInit {

  idAlumno: any = 0
  titulo: string = "Crear Alumno"

  formAlumno: FormGroup = this.fb.group(
    {
      apellidos:[null,Validators.required],
      nombre:[null,Validators.required],
      email:[null,Validators.required],
      fechaDeNacimiento:[null,Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<AltaAlumnosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public datos: Alumno,
    private fb:FormBuilder,
    private alumnosService : AlumnosService,
    private router: Router
  ){ 
      if (datos != undefined)
      {
        if (datos.Id > 0)
        {
          this.idAlumno = datos.Id
          this.titulo = "Editar Alumno"
          this.formAlumno.setValue
          ({
            apellidos: datos.Apellidos,
            nombre: datos.Nombre, 
            email: datos.Email,
            fechaDeNacimiento: datos.FechaDeNacimiento
          }); 
        }
      }
    }

  ngOnInit(): void {
  }

  grabar() {
    this.dialogRef.close(this.post())
  }

  cancelar(){
    this.dialogRef.close()
  }
  
  post(){

    const alumno : Alumno = {
      Id: Math.round(Math.random()*1000),
      Nombre: this.formAlumno.value.Nombre,
      Apellidos: this.formAlumno.value.Apellidos,
      Email: this.formAlumno.value.Email,
      FechaDeNacimiento: this.formAlumno.value.FechaDeNacimiento,
    }
    
    this.alumnosService.post(alumno)

    this.router.navigate(['Alumnos']);
  }
}
