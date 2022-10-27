import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  { path: 'login', 
  loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
   { 
     path: 'alumnos',
     loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule)
   },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
