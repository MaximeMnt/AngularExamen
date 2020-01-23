import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaximeService {

  constructor(private _http: HttpClient) {}


  get Dogs() : Observable<IDog> {
    return this._http.get<IDog>("http://localhost:3000/dog");
  }
}

export interface IDog {
	species: string;
	breed: string;
	color: string;
	age: number;
}