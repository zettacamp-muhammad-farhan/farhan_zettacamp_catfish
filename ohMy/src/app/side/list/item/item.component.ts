import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Input() item:any

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // console.log('ngOnChanges triggered', changes)
  }

  ngOnInit() {
    // console.log('success to access')
  }

  ngDoCheck() {
    // console.log(this.item)
    // console.log(`do check `)
  }

  ngAfterContentInit() {
    // console.log(`after`)
  }

}
