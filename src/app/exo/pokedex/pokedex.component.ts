import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel, PokemonResult } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  pokemonResult!: PokemonResult; 
  currentPokemon?: PokemonModel;

  constructor(
    private readonly _pokemonService: PokemonService
  ){
    this.getMany('https://pokeapi.co/api/v2/pokemon')
  }

  getMany(url: string){
    this._pokemonService.getMany(url).subscribe(
      (datas) => {
        this.pokemonResult = datas;
      }
    );
  }

  previous(){
    if(!this.pokemonResult.previous){
      return;
    }
    this.getMany(this.pokemonResult.previous);
  }

  next(){
    if(!this.pokemonResult.next){
      return;
    }
    this.getMany(this.pokemonResult.next);
  }

  getOne(url: string){
    this._pokemonService.getOneByUrl(url).subscribe(
      (datas: any) => {
        this.currentPokemon = {
          ...datas,
          imageUrl: datas.sprites.other.dream_world.front_default 
        };
      }
    );
  }
}
