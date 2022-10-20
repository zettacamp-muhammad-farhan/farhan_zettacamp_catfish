import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() item:any;
  discount = false;
  paid = false;
  imgSold = "https://batampos.co.id/wp-content/uploads/2018/11/sold-out-logo-png-2.png"

  constructor() { }

  ngOnInit(): void {
  }

  getDisc(){
    this.item.price = this.item.price -( 0.1 * this.item.price )
    this.discount = true
  }

  buy(){
    this.paid = true

  }

}
