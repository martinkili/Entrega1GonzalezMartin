import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { InscripcionesCrearComponent } from './components/inscripciones-crear/inscripciones-crear.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesService } from './services/inscripciones.service';
import { CursosService } from '../cursos/services/cursos.service';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';

@NgModule({
  declarations: [
    InscripcionesCrearComponent
  ],
  imports: [
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ],
  providers: [
    InscripcionesService,
    CursosService,
  ]
})
export class InscripcionesModule { }