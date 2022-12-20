import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-crear',
  templateUrl: './cursos-crear.component.html',
  styleUrls: ['./cursos-crear.component.css']
})
export class CursosCrearComponent implements OnInit {

  formulario!: FormGroup 

  constructor(

    private cursoService : CursosService,
    private titleCasePipe : TitleCasePipe,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.formulario = new FormGroup ({
      nombre: new FormControl('',[Validators.required]), 
      profesor: new FormControl('',[Validators.required]),
      fechaInicio: new FormControl('',[Validators.required])
    })
  }

  cancelar(){
    this.router.navigate(["Cursos"])
  }

  post(){

    const curso : Curso = {
      
      Nombre: this.titleCasePipe.transform(this.formulario.value.nombre),
      Profesor: this.titleCasePipe.transform(this.formulario.value.profesor),
      FechaInicio: this.formulario.value.fechaInicio,
      Id: Math.round(Math.random()*1000)
    }
    
    this.cursoService.post(curso)

    this.router.navigate(["Cursos"])

  }


}
