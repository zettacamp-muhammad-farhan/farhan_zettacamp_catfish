import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() food: any;
  @Input() index: any;

  count = 1
  angka = 0

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getCount().subscribe((val) => {
      this.count = val.totalCart
    })
  }

  addItem(){
    this.angka +=1
    console.log(this.count)
    this.dataService.setCount(this.angka)
  }

  getDisc(){
    this.dataService.getDisc(this.index, this.food.price)
  }

  buy(){
    this.dataService.buy(this.food.nama)
  }


}
