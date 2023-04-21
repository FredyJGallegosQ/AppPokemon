import { Injectable } from '@angular/core';
import { RootObject } from '../pokemonapp/pokemon/model';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokemon$: Subject<RootObject> = new Subject<RootObject>();
  arrayFavorites: Array<RootObject> = []
  favoritePokemon$: BehaviorSubject<RootObject[]> =
    new BehaviorSubject<RootObject[]>(this.arrayFavorites);
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  addPokemon(pokemon: RootObject){
    this.arrayFavorites.push(pokemon)
    this.favoritePokemon$.next(this.arrayFavorites)
  }
  getFavorites(){
    return this.favoritePokemon$.asObservable()
  }

  getPokemon(idPokemon: number | string){
    this.http
    .get<RootObject>(`${this.baseUrl}${idPokemon}`)
    .subscribe((response)=>{
      this.pokemon$.next(response)
    })
  }
}
