import { NgModule } from '@angular/core';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacionService } from '../services/autenticacion.service';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule
  ],
  providers:[
    AutenticacionService,
    AutenticacionGuard
  ]
})
export class CoreModule { }
