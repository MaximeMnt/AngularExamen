import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-angulardeelsub5',
  templateUrl: './angulardeelsub5.component.html',
  styleUrls: ['./angulardeelsub5.component.css']
})
export class Angulardeelsub5Component implements OnInit {
  @Input() min: number;
  @Input() max: number;
  result: number;
  @Input() startStop: boolean;
  constructor() {
        setInterval(()=>{
      this.randomNumber();
    }, 1000)
   }

  ngOnInit() {
  }
  randomNumber(){
    if(this.startStop==true){
    this.result = _.random(this.min, this.max)
  }}

}
