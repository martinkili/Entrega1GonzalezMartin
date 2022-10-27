import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListadoComponent } from './components/cursos-listado/cursos-listado.component';
import { CursosCrearComponent } from './components/cursos-crear/cursos-crear.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosDetalleComponent } from './components/cursos-detalle/cursos-detalle.component';
import { CursosService } from './services/cursos.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CursosListadoComponent,
    CursosCrearComponent,
    CursosEditarComponent,
    CursosDetalleComponent
  ],
  imports: [
    CursosRoutingModule,
    SharedModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
