import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ohMy';

  foods:{img:string, nama:string, price:number}[] = [];

  constructor(
    private dataService:DataService
  ){}

  ngOnInit(){
    this.foods = this.dataService.foods
  }
}
