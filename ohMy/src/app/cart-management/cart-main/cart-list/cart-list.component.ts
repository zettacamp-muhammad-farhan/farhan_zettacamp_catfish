import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() recipe:any

  value:number = 1

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

  increaseVal(){
    this.value++
  }
  decreaseVal(){
    if(this.value > 0){
      this.value--
    } else {
      this.value = this.value
      alert('you cant decrease item at 0 !!!')
    }
  }

}
