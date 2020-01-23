import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeSvcService {

  constructor(private http: HttpClient) { }

  GetPokemons(){
    return this.http.get<IPokemon[]>("http://localhost:3000/pokemon")
  }
}





export interface INextEvolution {
  num: string;
  name: string;
}

export interface IPrevEvolution {
  num: string;
  name: string;
}

export interface IPokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[];
  weaknesses: string[];
  next_evolution: INextEvolution[];
  prev_evolution: IPrevEvolution[];
}
