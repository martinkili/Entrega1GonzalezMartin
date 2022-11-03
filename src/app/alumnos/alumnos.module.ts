import { NgModule } from '@angular/core';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosDetalleComponent } from './components/alumnos-detalle/alumnos-detalle.component';
import { TitleCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AltaAlumnosComponent,
    AlumnosDetalleComponent,
  ],
  imports: [
    SharedModule,
    AlumnosRoutingModule
  ],
  providers: [
    AlumnosService,
    TitleCasePipe
  ]
})
export class AlumnosModule { }
