import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../guards/autenticacion.guard';
import { AlumnosDetalleComponent } from './components/alumnos-detalle/alumnos-detalle.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [

  { path: '', component: ListaAlumnosComponent, canActivate: [AutenticacionGuard] },
  { path: ':id', component: AlumnosDetalleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
