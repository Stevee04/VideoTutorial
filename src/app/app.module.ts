import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';
import { ListaFotos2Component } from './lista-fotos2/lista-fotos2.component';
import { registerLocaleData } from '@angular/common';

// registerLocaleData{localeEs, "es"}

@NgModule({
  declarations: [
    AppComponent,
    ListaFotosComponent,
    ListaFotos2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
