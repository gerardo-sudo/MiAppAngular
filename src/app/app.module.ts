import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Peticion Http

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';

import { CapitulosPersonajesComponent } from './components/capitulos-personajes/capitulos-personajes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
//importar rutas

import { ROUTES } from './app.routers';
import { ComponentsComponent } from './components/components.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    CapitulosComponent,
    ComponentsComponent,
    CapitulosPersonajesComponent,
    NavbarComponent,
    PersonajesComponent,
    HeroComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES )

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
