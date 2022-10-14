import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

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
      apellido:[null,Validators.required],
      nombre:[null,Validators.required],
      edad:[null,Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<AltaAlumnosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public datos: Alumno,
    private fb:FormBuilder
  ){ 
      if (datos != undefined)
      {
        if (datos.id > 0)
        {
          this.idAlumno = datos.id
          this.titulo = "Editar Alumno"
          this.formAlumno.setValue
          ({
            apellido: datos.apellido,
            nombre: datos.nombre, 
            edad: datos.edad,
          }); 
        }
      }
    }

  ngOnInit(): void {
  }

  grabar() {
    this.dialogRef.close({data: this.formAlumno.value, id: this.idAlumno})
  }

  cancelar(){
    this.dialogRef.close()
  }
  
}
