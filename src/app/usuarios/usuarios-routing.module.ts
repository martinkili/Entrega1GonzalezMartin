import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { UsuariosListadoComponent } from './components/usuarios-listado/usuarios-listado.component';

const routes: Routes = [

  { path: '', component: UsuariosListadoComponent, canActivate : [AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
