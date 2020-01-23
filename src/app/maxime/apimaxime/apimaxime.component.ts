import { Component, OnInit } from '@angular/core';
import { MaximeService, IDog } from '../services/maxime.service';

@Component({
  selector: 'app-apimaxime',
  templateUrl: './apimaxime.component.html',
  styleUrls: ['./apimaxime.component.css']
})
export class APIMaximeComponent implements OnInit {
lijst: IDog;


  constructor(private service:MaximeService) {
    this.service.Dogs.subscribe(d => this.lijst = d);
   }

  ngOnInit() {
  }

}
