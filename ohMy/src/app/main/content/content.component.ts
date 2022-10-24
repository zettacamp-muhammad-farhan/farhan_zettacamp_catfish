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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  getDisc(){
    this.dataService.getDisc(this.index, this.food.price)
  }

}
