import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { CursosCrearComponent } from './components/cursos-crear/cursos-crear.component';
import { CursosDetalleComponent } from './components/cursos-detalle/cursos-detalle.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosListadoComponent } from './components/cursos-listado/cursos-listado.component';

const routes: Routes = [
  { path: '', component: CursosListadoComponent, 
  children: [
    { path: 'editar', component: CursosEditarComponent },
    { path: 'agregar', component: CursosCrearComponent },
    { path: ':id', component: CursosDetalleComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
