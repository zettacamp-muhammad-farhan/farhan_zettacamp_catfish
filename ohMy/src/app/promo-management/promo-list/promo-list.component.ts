import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink/dist/subsink';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {

  subs = new SubSink()
  promos:{}[] = []

  constructor(
    private promoService:PromoService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.promoService
    .getPromos()
    .subscribe(
      (data:any) => {
        this.promos.push(data.data.GetAllPromos[0])
        console.log(data.data.GetAllPromos);
      }
    )
  }

  addProm(){
    // this.promoService.addPromos()

    // this.subs.sink = this.promoService
    // .getPromos()
    // .subscribe(
    //   (data:any) => {
    //     this.promos.push(data.data.GetAllPromos[0])
    //     console.log(data.data.GetAllPromos);
    //   }
    // )
    
  }

}
