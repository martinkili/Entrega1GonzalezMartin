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
    private router: Router
    
  ) { 

    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
    })
    
  }

  ngOnInit(): void {
    
  }

  login() {

    if (this.autenticacionService.login(this.formulario.value.usuario, this.formulario.value.contrasena)){
      this.router.navigate(['cursos'])
    }else{
      alert("Usuario inexistente")
    }
    
  }
  
}
