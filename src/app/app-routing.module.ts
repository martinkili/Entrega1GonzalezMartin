import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  //{ path: 'inicio', component: InicioComponent, canActivate: [AutenticacionGuard] },
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
   { 
     path: 'alumnos',
     loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule)
   },
  { path: '', redirectTo: 'cursos', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
