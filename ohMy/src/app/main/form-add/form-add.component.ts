import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { 
    this.dataService.foodUpdate.subscribe(
      (nama:string) => alert('New Food: ' + nama)
    )
   }

  ngOnInit() {
    this.dataService.cek()
  }

  addFood(img:string, nama:string, price:string){
    this.dataService.addFood(img,nama, parseInt(price))
  }

}
