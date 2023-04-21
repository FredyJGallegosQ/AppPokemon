import { Component, OnInit, Inject } from '@angular/core';
import { PokemonData, RootObject } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokeApiService } from 'src/app/shared/poke-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent{
  infoPokemon!: RootObject;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private pokeApiService: PokeApiService,
    @Inject(MAT_DIALOG_DATA) public data: PokemonData
  ) {
    this.infoPokemon = data.pokemonData;
  }
  addFavorites(pokemon: RootObject){
    this.pokeApiService.addPokemon(pokemon);
  }
  ngOnInit(){
    this.pokeApiService.favoritePokemon$.subscribe((obj) => {
      console.log(obj);

    })
    //console.log(this.arrayPokemon);
  }
}
