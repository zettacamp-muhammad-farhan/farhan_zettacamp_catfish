import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent implements OnInit, OnChanges {

  @Input() item:any;
  discount = false;
  paid = false;
  imgSold = "https://batampos.co.id/wp-content/uploads/2018/11/sold-out-logo-png-2.png"
  hidden= true


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('dom changed')
  }

  ngOnInit() {
    setInterval(()=>{this.hidden=false}, 2000)
  } 

  @ViewChild('claim') claim!:ElementRef

  ngAfterViewInit() {
    console.log('change')
  }

  getDisc(){
    this.item.price = this.item.price -( 0.1 * this.item.price )
    this.discount = true
  }

  buy(){
    this.paid = true

  }

}
