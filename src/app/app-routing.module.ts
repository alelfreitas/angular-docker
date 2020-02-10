import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarListaComponent } from './radar/radar-lista/radar-lista.component';
import { RadarComponent } from './radar/consulta/radar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RadarListResolver } from './radar/radar-lista/radar-lista.resolver';


const routes: Routes = [
  {
    path: 'tsb/lista/:nomePapel',
    component: RadarListaComponent,
    resolve: {
      radares: RadarListResolver
    }
  },
  {path: 'tsb/unico', component: RadarComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
