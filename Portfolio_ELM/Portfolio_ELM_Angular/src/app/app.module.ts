import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InfoCabeceraComponent } from './components/info-cabecera/info-cabecera.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InfoCabeceraComponent,
    AcercaComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
