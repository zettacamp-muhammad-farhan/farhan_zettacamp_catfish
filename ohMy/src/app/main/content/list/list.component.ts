import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  inputData ="input your data ..."

  imgHide = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/2560px-Black_flag.svg.png'

  constructor() { }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(this.newItemEvent)
  }

  updateOnStatuses(event:any){
    // console.log(event)
    this.inputData = (<HTMLInputElement>event.target).value

  }

  ngOnInit(): void {
  }

}
