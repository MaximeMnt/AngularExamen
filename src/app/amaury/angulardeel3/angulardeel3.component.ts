import { Component, OnInit } from '@angular/core';
import * as _ from 'mathjs';

@Component({
  selector: 'app-angulardeel3',
  templateUrl: './angulardeel3.component.html',
  styleUrls: ['./angulardeel3.component.css']
})
export class Angulardeel3Component implements OnInit {

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
