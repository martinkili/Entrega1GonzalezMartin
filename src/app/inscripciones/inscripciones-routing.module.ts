import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { InscripcionesCrearComponent } from './components/inscripciones-crear/inscripciones-crear.component';

const routes: Routes = [
  { path: '', component: InscripcionesCrearComponent, canActivate : [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }