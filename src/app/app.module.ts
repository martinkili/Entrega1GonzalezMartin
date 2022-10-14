import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListaAlumnosComponent } from './components/alumnos/lista-alumnos/lista-alumnos.component';
import { AltaAlumnosComponent } from './components/alumnos/alta-alumnos/alta-alumnos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApellidoNombrePipe } from './apellido-nombre.pipe';
import { Fuente20Directive } from './fuente20.directive'

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    AltaAlumnosComponent,
    MenuComponent,
    ToolbarComponent,
    ApellidoNombrePipe,
    Fuente20Directive
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
