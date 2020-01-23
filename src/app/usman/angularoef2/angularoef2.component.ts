import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularoef2',
  templateUrl: './angularoef2.component.html',
  styleUrls: ['./angularoef2.component.css']
})
export class Angularoef2Component implements OnInit {

  Data: string[] = new Array;
  showHistory: boolean = false;
  inval1: string = "";
  inputreply: string = "";
  value: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

  ViewHistory = () => {
    if (this.showHistory) {
      this.showHistory = false;
    } else {
     this.showHistory = true
    }
  }

  Submit = (value: string) => {
    this.Data.push(value);
    this.inval1 = ""
  }

  Showreply = (value: number) => {
    if (value == 100) {
      this.inputreply = "Dit is het enige juiste antwoord";
    } else if (value <= 10) {
      this.inputreply = "Je bent gestoord";
    } else if (value <= 50) {
      this.inputreply = "Je weet dat het hoger is...";
    } else if (value <= 80) {
      this.inputreply = "Hoger misschien, ni?";
    } else if (value <= 99) {
      this.inputreply = "Ziet er goed uit";
    }
  }

}
