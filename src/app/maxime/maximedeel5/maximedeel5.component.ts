import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-maximedeel5',
  templateUrl: './maximedeel5.component.html',
  styleUrls: ['./maximedeel5.component.css']
})
export class Maximedeel5Component implements OnInit {

options: SelectItem[] = [];
imageUrl:string;

//oef 2
Naam: string;
Voornaam:string;
Straat:string;
Nummer:number;
Gemeente: string;
persoon: IPersoon = {} as IPersoon;
showInfo:boolean=false;

//oef3
checked:boolean;

  constructor() {
    
    for(var i=0; i < 152; i++){
      this.options.push({label: (i+1).toString(), value: i+1});
    }

    setInterval(() => {
      this.randomImage();

    }, 5000);
   }

  ngOnInit() {
  }



  randomImage = (a:number=0) => {
    if(a ==0){
      this.imageUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + _.random(1, 152) + ").jpg"
    } else this.imageUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + a + ").jpg"

  }
}

export interface IPersoon {
  naam:string;
  voornaam:string;
  straat:string;
  nummer: string;
  gemeente: string;

}