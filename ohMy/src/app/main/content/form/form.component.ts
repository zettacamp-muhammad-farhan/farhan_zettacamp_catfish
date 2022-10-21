import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit, OnChanges {

  @Output() newItemEvent = new EventEmitter<any>();

  disable=true

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  @ViewChild('price') price:any

  ngOnInit(): void {
    setInterval(()=>{this.disable=false}, 2000)
    console.log('init')
  }

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
    console.log(this.price)
  }

}
