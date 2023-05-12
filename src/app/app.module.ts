import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './component/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ContactoformComponent } from './component/contacto/contactoform/contactoform.component';
import { ExperiencialaboralformComponent } from './component/experiencia-laboral/experiencialaboralform/experiencialaboralform.component';
import { EducacionformComponent } from './component/educacion/educacionform/educacionform.component';
import { ProyectosformComponent } from './component/proyectos/proyectosform/proyectosform.component';
import { SobremiformComponent } from './component/sobre-mi/sobremiform/sobremiform.component';
import { HabilidadesformComponent } from './component/habilidades/habilidadesform/habilidadesform.component';

import { InicioformComponent } from './component/inicio/inicioform/inicioform.component';
import { HeaderformComponent } from './component/header/headerform/headerform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent,
    ContactoformComponent,
    ExperiencialaboralformComponent,
    EducacionformComponent,
    ProyectosformComponent,
    SobremiformComponent,
    HabilidadesformComponent,
    ProyectosformComponent,
    InicioformComponent,
    HeaderformComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
