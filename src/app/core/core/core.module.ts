import { NgModule } from '@angular/core';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteHttpService } from '../services/cliente-http.service';
import { SesionService } from '../services/sesion.service';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule
  ],
  providers:[
    SesionService,
    AutenticacionGuard,
    AdminGuard,
    ClienteHttpService
  ]
})
export class CoreModule { }
