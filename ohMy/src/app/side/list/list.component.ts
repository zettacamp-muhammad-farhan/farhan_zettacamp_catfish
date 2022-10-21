import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges, DoCheck {

  cars = ['BUNNY', 'CHICK', 'CAMEL']

  animal ="Dragonn"

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges triggered', changes);
  }

  ngOnInit() {
    console.log('vack')
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered edit :' + this.animal);
  }


  addData(val:any){
    this.cars.push(val)
  }

  editData(val:any){
    this.animal = val
  }
}
