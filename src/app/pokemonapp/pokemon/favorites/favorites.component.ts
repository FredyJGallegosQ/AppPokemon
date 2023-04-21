import { Component } from '@angular/core';
import { RootObject } from '../model';
import { PokeApiService } from 'src/app/shared/poke-api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  arrayFavorites: Array<RootObject> = [];

  constructor(private pokeApi: PokeApiService,
  ){

  }
  ngOnInit(){
    this.pokeApi.getFavorites().subscribe((response) =>{
      this.arrayFavorites = response;
    })
  }
}
