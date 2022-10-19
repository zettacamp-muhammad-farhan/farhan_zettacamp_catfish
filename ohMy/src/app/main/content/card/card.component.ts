import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit { 

  @Input() items: any

  background = "red"

  imgHide = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/2560px-Black_flag.svg.png'

  constructor() { }

  backgroundChange(){
    if(this.background=="red"){
      console.log("success change to yellow")
      return this.background = "yellow"
    }else {
      console.log("success change to yellow")
      return this.background = "red"
    }

  }



  ngOnInit(): void {
  }

}
