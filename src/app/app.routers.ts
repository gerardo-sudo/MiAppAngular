import { Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { CapitulosPersonajesComponent } from './components/capitulos-personajes/capitulos-personajes.component';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
   { path: 'home' , component: HomeComponent  },
   { path: 'personajes', component: PersonajesComponent  },
   { path: 'capitulos', component: CapitulosComponent  },
   { path: 'personaje/:id', component: CapitulosPersonajesComponent  },
   { path: '', pathMatch: 'full', redirectTo: 'personajes' },
   { path: '**', pathMatch: 'full', redirectTo: 'personajes' }
];

