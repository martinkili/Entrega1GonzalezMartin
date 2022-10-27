import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AutenticacionService } from '../core/services/autenticacion.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers:[
    AutenticacionService
  ]
})

export class LoginModule { }
