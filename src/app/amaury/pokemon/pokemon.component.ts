import { Component, OnInit } from '@angular/core';
import { PokeSvcService, IPokemon } from '../services/poke-svc.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: IPokemon;

  constructor(private pokeSvc: PokeSvcService) { }
  
  async ngOnInit() {
   this.refresh();
  }
  refresh =()=>{
    this.pokeSvc.GetPokemons().subscribe(pokemons => {
      let index = _.random(0, pokemons.length-1)
      this.pokemon = pokemons[index];
    })
  }

}
