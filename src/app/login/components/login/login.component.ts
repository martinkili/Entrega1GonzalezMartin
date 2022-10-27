import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/core/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private autenticacionService: AutenticacionService,
    
  ) { 

    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
    })
    
  }

  ngOnInit(): void {
    
  }

  login() {
    this.autenticacionService.login(this.formulario.value.usuario, this.formulario.value.contrasena)
  }
  
}
