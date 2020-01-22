import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as MathJS from "mathjs"
@Component({
  selector: 'app-angulardeel4',
  templateUrl: './angulardeel4.component.html',
  styleUrls: ['./angulardeel4.component.css']
})
export class Angulardeel4Component implements OnInit {

  coords: string;
  RandomNumber: number;
  counter: number = 0;
  fieldEmpty: boolean = true;

  TodoLijst: string[] = [];
  itemCounter: number = 0;

  numbers: string[][] = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['.', '0', '=', '/']];
  display: string = "";

  calculatorString: string = "";

  imageUrl: string = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + this.RandomNumber + ").jpg";
  constructor() {
    this.randomImage();
    setInterval(() => {
      this.randomImage();
    }, 5000)
  }

  randomImage() {
    this.imageUrl = "https://mdbootstrap.com/img/Photos/Slides/img%20(" + _.random(1, 152) + ").jpg"
  }
  setValue(ingave: number) {
    this.counter = ingave;
  }
  changeButtenClickable(value: string) {
    if (value.length == 0) {
      this.fieldEmpty = true;
    }
    else {
      this.fieldEmpty = false;
    }
  }
  addTodo(value: string) {

    this.itemCounter++;
    console.log(value);
    this.TodoLijst.push(value);
  }
  Getal(n: string) {
    if (n != "=")
      this.display += n;
    else
      this.display = MathJS.evaluate(this.display)
  
  }
  removeItem(item: number) {
    this.TodoLijst.splice(item, 1);
  }
  doSomething(event: MouseEvent) {
    var x = event.pageX;
    var y = event.pageY;
    this.coords = x + "/" + y;
  }

  ngOnInit() {
  }

}
