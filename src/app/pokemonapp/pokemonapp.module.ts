import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonappRoutingModule } from './pokemonapp-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FavoritesComponent } from './pokemon/favorites/favorites.component';
import { HomeComponent } from './pokemon/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from './pokemon/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PokemonComponent,
    FavoritesComponent,
    HomeComponent,
    DialogComponent

  ],
  imports: [
    CommonModule,
    PokemonappRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,


  ]
})
export class PokemonappModule { }
