import { DatePipe, formatDate, getLocaleDateFormat, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      apellidos:new FormControl(null,[Validators.required]),
      nombre: new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      fechaDeNacimiento: new FormControl(),
    }
  )

  constructor(
    public dialogRef: MatDialogRef<AltaAlumnosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public datos: Alumno,
    private fb:FormBuilder,
    private alumnosService : AlumnosService,
    private titleCasePipe : TitleCasePipe,
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

    console.log(this.datos)
    if (this.datos != undefined)
    {
      if (this.datos.Id > 0)
      {
        this.put()
      }

    }else{
      this.post()
    }

    this.dialogRef.close()
  }

  cancelar(){
    this.dialogRef.close()
  }
  
  post(){

    const alumno : Alumno = {
      
      Nombre: this.titleCasePipe.transform(this.formAlumno.value.nombre),
      Apellidos: this.titleCasePipe.transform(this.formAlumno.value.apellidos),
      Email: this.formAlumno.value.email,
      FechaDeNacimiento: this.formAlumno.value.fechaDeNacimiento,
      Avatar: "",
      Id: Math.round(Math.random()*1000)
    }
    console.log(alumno.Id)
    this.alumnosService.post(alumno)
  }

  put(){

    const alumno : Alumno = {
      
      Nombre: this.titleCasePipe.transform(this.formAlumno.value.nombre),
      Apellidos: this.titleCasePipe.transform(this.formAlumno.value.apellidos),
      Email: this.formAlumno.value.email,
      FechaDeNacimiento: this.formAlumno.value.fechaDeNacimiento,
      Avatar: "",
      Id: this.idAlumno
    }
    console.log(alumno.Id)
    this.alumnosService.put(alumno)
    
  }
}
