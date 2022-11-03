import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  { path: 'Login', 
  loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  { 
    path: 'Cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
  { 
    path: 'Alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule)
  },
  { 
    path: 'Usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
