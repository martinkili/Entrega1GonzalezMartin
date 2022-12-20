import { NgModule } from '@angular/core';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AutenticacionGuard } from 'src/app/guards/autenticacion.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteHttpService } from '../services/cliente-http.service';
import { SesionService } from '../services/sesion.service';
import { EffectsModule } from '@ngrx/effects';
import { SesionEffects } from '../state/sesion.effects';
import { sesionFeatureKey, reducer } from '../state/sesion.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(sesionFeatureKey, reducer),
    EffectsModule.forFeature([SesionEffects])

  ],
  providers:[
    SesionService,
    AutenticacionGuard,
    AdminGuard,
    ClienteHttpService
  ]
})
export class CoreModule { }
