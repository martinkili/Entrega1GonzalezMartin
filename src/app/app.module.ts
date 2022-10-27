import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './core/components/menu/menu.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { ApellidoNombrePipe } from './apellido-nombre.pipe';
import { Fuente20Directive } from './fuente20.directive';
import { SharedModule } from './shared/shared/shared.module';
import { CoreModule } from './core/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ApellidoNombrePipe,
    Fuente20Directive,
    PaginaNoEncontradaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
