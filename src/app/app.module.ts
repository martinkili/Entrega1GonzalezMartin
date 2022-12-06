import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { ApellidoNombrePipe } from './apellido-nombre.pipe';
import { Fuente20Directive } from './fuente20.directive';
import { CoreModule } from './core/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { MaterialModule } from './material/material.module';
import { UsuariosListadoComponent } from './usuarios/components/usuarios-listado/usuarios-listado.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ApellidoNombrePipe,
    Fuente20Directive,
    PaginaNoEncontradaComponent,
    UsuariosListadoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
