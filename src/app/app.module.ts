import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http';
import { IniciarsesionComponent } from './componentes/iniciarsesion/iniciarsesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SobremiComponent,
    ContactoComponent,
    IniciarsesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
