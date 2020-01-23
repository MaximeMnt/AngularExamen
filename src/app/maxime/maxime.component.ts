import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as MathJS from "mathjs"

@Component({
  selector: 'app-maxime',
  templateUrl: './maxime.component.html',
  styleUrls: ['./maxime.component.css']
})
export class MaximeComponent implements OnInit {

  date: Date = new Date();
  counter: number = 0;
  RandomNumber: number = 0;

  //oefening 1:
  data: string[] = ["koek", "kaas", "vis", "croissant fromage"];
  userData: string[] = [];
  buttonStatus: boolean = true;
  textValue: string;
  keuze: number;
  KeuzeReturnValue: string;
  imageUrl: string;

  //number shizzle
  calcCounter: number = 0;


  //coords
  coords: string;

  //todoLijst
  buttonIsEmpty: boolean = true;
  toDoItems: string[] = [];

  //calculator
  numbers: string[][] = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['.', '0', '=', '/']];
  display:string = "";

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);

    setInterval(() => {
      this.counter++;
    }, 200);

    setInterval(() => {
      this.RandomNumber = _.random(1, 100);
    }, 2000);

    this.checkIfChanged();



    setInterval(() => {
      this.randomImage();

    }, 5000);

  }

  randomImage = () => {
    this.imageUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + _.random(1, 152) + ").jpg"
  }

  Increment() {
    this.calcCounter++;
  }

  setInputValue(value: number) {
    this.calcCounter = value;
  }

  checkIfChanged = () => {
    if (this.textValue != null) {
      this.buttonStatus = false;
    } else this.buttonStatus = true;
  }

  addValue = () => {
    if (this.textValue == "kaas") {
      alert("wow jij wist het geheime wachtwoord wtf");
    }
    this.userData.push(this.textValue);
  }

  validateKeuze = () => {
    if (this.keuze == 1) {
      this.KeuzeReturnValue = "LEGENDARY KEUZE!"
    } else this.KeuzeReturnValue = "Saaie keuze :("
  }

  doSome = (a: number) => {
    return alert((a * a) + " joehoe!");
  }

  getCoords(event: MouseEvent) {
    var pageX = event.pageX;
    var pageY = event.pageY;

    this.coords = pageX + "/" + pageY;
  }

  ToDoListAdd(value: string) {
    this.toDoItems.push(value);
  }

  todoChanged(value: string) {
    if (value.length == 0) {
      this.buttonIsEmpty = true;
    } else this.buttonIsEmpty = false;
  }

  deleteitem(value: number) {
    this.toDoItems.splice(value, 1);
  }


  //calculator
  Getal(val:string){
    if(val != "=")
      this.display+= val;
    else
    this.display = MathJS.evaluate(this.display);
  }



  ngOnInit() {
  }

}


export class MyComponent {

  color: string;

}