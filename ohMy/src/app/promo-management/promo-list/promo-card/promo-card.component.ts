import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

  @Input() promo:any

  imgDefault = "http://www.smartmama.com/wp-content/uploads/2022/01/beauty-face-smiling-asian-woman-touching-healthy-skin-portrait-beautiful-happy-girl-model-with-fresh-glowing-hydrated-facial-skin-natural-makeup_65293-3515.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
