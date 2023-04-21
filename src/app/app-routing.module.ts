import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemonapp/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    loadChildren: () =>
    import('./pokemonapp/pokemonapp.module').then(
      (mod) => mod.PokemonappModule
    ),
  },

]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes, {
      useHash: false,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
