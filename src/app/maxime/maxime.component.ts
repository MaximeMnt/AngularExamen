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

//oefening 1:
data: string[] = [ "koek","kaas", "vis", "croissant fromage" ];
userData: string[] = [];
buttonStatus:boolean = true;
textValue:string;



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

    this.checkIfChanged();
 }



checkIfChanged = () => {
  if(this.textValue!=null){
    this.buttonStatus = false;
  } else this.buttonStatus = true;
} 
 
addValue = () => {
  if(this.textValue == "penis"){
    alert("wow jij wist het geheime wachtwoord wtf");
  }
  this.userData.push(this.textValue);
}

  ngOnInit() {
  }

}
