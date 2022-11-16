import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './cursos-editar.component.html',
  styleUrls: ['./cursos-editar.component.css']
})
export class CursosEditarComponent implements OnInit {

  id!: number
  formulario!: FormGroup 

  constructor(
    
    private cursoService : CursosService,
    private titleCasePipe : TitleCasePipe,
    private router: Router,
    private activateRoute: ActivatedRoute,

  ) { 

    
  }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((parametros) => {
      
      this.id = parseInt(parametros.get('id') || '0');

      this.cursoService.get(this.id).subscribe(curso => 
        
        this.formulario = new FormGroup ({
          nombre: new FormControl(curso.Nombre, [Validators.required]), 
          profesor: new FormControl(curso.Profesor, [Validators.required]),
          fechaInicio: new FormControl(curso.FechaInicio, [Validators.required])
        })
        
      )
      
    })
    
  }

  cancelar(){
    this.router.navigate(["Cursos"])
  }

  put(){

    const curso : Curso = {
      
      Nombre: this.titleCasePipe.transform(this.formulario.value.nombre),
      Profesor: this.titleCasePipe.transform(this.formulario.value.profesor),
      FechaInicio: this.formulario.value.fechaInicio,
      Id: this.id
    }
    
    this.cursoService.put(curso)

    this.router.navigate(["Cursos"])

  }

}
