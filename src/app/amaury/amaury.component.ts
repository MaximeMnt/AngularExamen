import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amaury',
  templateUrl: './amaury.component.html',
  styleUrls: ['./amaury.component.css']
})
export class AmauryComponent implements OnInit {

  input: string = "";
  boodschappen : string[] = [];
  addBoodschap(){
    this.boodschappen.push(this.input)
  }
  constructor() { }

  ngOnInit() {
  }

}


