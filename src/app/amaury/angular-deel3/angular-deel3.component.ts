import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-angular-deel3',
  templateUrl: './angular-deel3.component.html',
  styleUrls: ['./angular-deel3.component.css']
})
export class AngularDeel3Component implements OnInit {

  steden: string[] = ["anchorage", "Brusse", "Osaka", "Auckland", "Kaapstad"];
  getallenArray: number[] = [1,2,3,4,5];
  RandomNumber: number;
  constructor() { 
    setInterval(()=>{
      this.RandomNumber = _.random(1,10);
    },2000)
  }


  ngOnInit() {
    
  }

}
export class Persoon{

  public Persoon(naam, Voornaam, Geboortedatum){
    this._Naam = naam;
    this._Voornaam = Voornaam;
    this._Geboortedatum = Geboortedatum;
  }
  
  private _Naam : string;
  public get Naam() : string {
    return this._Naam;
  }

  
  private _Voornaam : string;
  public get Voornaam() : string {
    return this._Voornaam;
  }
  
  
  private _Geboortedatum : string;
  public get Geboortedatum() : string {
    return this._Geboortedatum;
  }
  
  
}