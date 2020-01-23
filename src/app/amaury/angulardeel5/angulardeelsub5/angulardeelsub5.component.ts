import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-angulardeelsub5',
  templateUrl: './angulardeelsub5.component.html',
  styleUrls: ['./angulardeelsub5.component.css']
})
export class Angulardeelsub5Component implements OnInit {
  min: number = 0;
  max: number = 10;
  result: number;
  startStop: boolean;
  constructor() {
    setInterval(()=>{
      if(this.startStop==true){
      this.randomNumber();
    }}, 1000)
   }

  ngOnInit() {
  }
  randomNumber(){
    this.result = _.random(this.min, this.max)
  }

}
