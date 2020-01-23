import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import * as _ from 'lodash';



@Component({
  selector: 'app-angulardeel5',
  templateUrl: './angulardeel5.component.html',
  styleUrls: ['./angulardeel5.component.css']
})
export class Angulardeel5Component implements OnInit {
  options: SelectItem[] = [];
  imageUrl:string;
  counter: number = 0;
  showInfo: boolean = false;

  Persoon = {} as IPersoon;

  //oef parent - child
  min: number = 0;
  max: number = 10;
  startStop: boolean= true;

  constructor() {
    for(var i=0; i < 152; i++){
      this.options.push({label: (i+1).toString(), value: i+1});
    }
    this.randomImage();
    setInterval(() => {
      this.randomImage();
    }, 5000)

   }
   

  ngOnInit() {
    
  }

  randomImage() {
    this.imageUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + _.random(1, 152) + ").jpg"
  }
  setValue(ingave: number) {
    this.counter = ingave;
  }
  

}
export interface IPersoon{
  voornaam: string;
  naam: string;
  straat: string;
  nr: string;
  gemeente: string;
}
