import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import * as _ from "lodash";

@Component({
  selector: 'app-usmandeel5',
  templateUrl: './usmandeel5.component.html',
  styleUrls: ['./usmandeel5.component.css']
})
export class Usmandeel5Component implements OnInit {
  options: SelectItem[] = new Array();
  selectedImage: string = "1";
  persoon = {} as IPersoon;
  showInfo: boolean = false;

  constructor() {
    for (let i = 0; i < 152; i++) {
      this.options.push({label: (i+1).toString(), value: i+1})
    }
  }

  ngOnInit() {
    this.Random();
    setInterval(this.Random, 10000)
  }

  Random = () =>
  {
    this.selectedImage = _.random(1,152)
  }

  
  get imageUrl(){
    return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.selectedImage}).jpg`
  }

  ShowInfo = () => {
    if (this.showInfo) {
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
  }
}

export interface IPersoon {
  naam: string;
  voornaam: string;
  straat: string;
  nr: string;
  gemaante: string;
}
