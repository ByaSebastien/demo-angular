import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { PokemonModel, PokemonResult } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getOne(id: number):Observable<PokemonModel>{
    return this._http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getMany(url: string){
    return this._http.get<PokemonResult>(url).pipe(
      switchMap( datas => {

        const detailRequests = datas.results.map(
          (pokemonSimple) => this._http.get<any>(pokemonSimple.url).pipe(
            map(result => ({
              ...pokemonSimple,
              imgUrl: result.sprites.front_default
            }))
          )
        );

        return forkJoin(detailRequests).pipe(
          map( detailedPokemons => ({
            ...datas,
            results: detailedPokemons
          }))
        );
      })
    );
  }

  getOneByUrl(url: string){
    return this._http.get<PokemonModel>(url);
  }
}
