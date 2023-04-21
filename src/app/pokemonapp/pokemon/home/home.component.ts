import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { RootObject } from '../model';
import { Dialog } from '@angular/cdk/dialog';
import { PokeApiService } from 'src/app/shared/poke-api.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  arrayPokemon: Array<RootObject> = [];
  constructor(

    private pokeApi: PokeApiService,
    private dialog: MatDialog,
  ){}
  openDialog(Pokemon: RootObject): void{
    console.log(Pokemon);
    this.dialog.open(DialogComponent,{
      width: '40rem',
      height: '40rem',
      data: {
        pokemonData: Pokemon,
      }
    })
  }
  ngOnInit(){
    this.pokeApi.pokemon$.subscribe((obj) => {
      this.arrayPokemon.push(obj);
    })
    for (let i = 1; i < 13; i++) {
      this.pokeApi.getPokemon(i);
    }
    //console.log(this.arrayPokemon);
  }
}
