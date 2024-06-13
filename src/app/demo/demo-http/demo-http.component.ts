import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel } from '../../models/pokemon.model';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrl: './demo-http.component.scss'
})
export class DemoHttpComponent {

  currentId!: number;
  pokemon?: PokemonModel;

  constructor(
    private readonly _ar: ActivatedRoute,
    private readonly _pokemonService: PokemonService,
    private readonly _router: Router
  ){
    console.log('In constructor');
    
    // + pour convertir simplement en number
    // this.currentId = +this._ar.snapshot.params['id']
    
    // console.log(this._ar.snapshot.url.join('/'));
    this._ar.params.subscribe(
      (p: any) => {
        this.currentId = +p.id;

        this._pokemonService.getOne(p.id).subscribe({
          next: (p: any) => {
            // console.log(p);
            this.pokemon = {
              id: p.id,
              name: p.name,
              weight: p.weight,
              height: p.height,
              imageUrl: p.sprites.other.dream_world.front_default
            };
            // console.log(this.pokemon);
          },
          error: (error: any) => {
            console.log(error);
            _router.navigate(['/home'])
          }
        });
      }
    )
  }

  previousPokemon(){
    this.currentId--
    this._router.navigate(['/demo/demo07/' + this.currentId])
    }
    
    nextPokemon(){
      this.currentId++
      this._router.navigate(['/demo/demo07/' + this.currentId])
  }
}
