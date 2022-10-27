import { NgModule } from '@angular/core';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AltaAlumnosComponent,
  ],
  imports: [
    SharedModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
