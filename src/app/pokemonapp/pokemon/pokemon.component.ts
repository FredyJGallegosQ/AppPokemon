import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent{
  pokemon!: number;
  arrayFavorites: Array<RootObject> = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  // constructor(
  //   private http: HttpClient,
  //   private pokeApi: PokeApiService,
  //   private dialog: MatDialog,
  // ){}

  // openFavorites(ListaPokemons: Array<RootObject>): void{
  //   console.log(ListaPokemons);
  //   this.dialog.open(DialogComponent,{
  //     width: '40rem',
  //     height: '40rem',
  //     data: {
  //       pokemonData: ListaPokemons,
  //     }
  //   })
  // }

}


