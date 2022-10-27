import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacionService } from '../services/autenticacion.service';

@NgModule({
  declarations: [
  ],
  imports: [
    
    SharedModule
  ],
  providers:[
    AutenticacionService
  ]
})
export class CoreModule { }
