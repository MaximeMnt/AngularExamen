import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';    


@Component({
  selector: 'app-maxime',
  templateUrl: './maxime.component.html',
  styleUrls: ['./maxime.component.css']
})
export class MaximeComponent implements OnInit {

date : Date = new Date();
counter: number = 0; 
RandomNumber: number = 0;


constructor() {
  setInterval(() => {
    this.date = new Date();
  }, 1);

  setInterval(() =>{
  this.counter++;
  },200);

  setInterval(()=>{
    this.RandomNumber = _.random(1,100);
  },2000);

 }

  ngOnInit() {
  }

}
