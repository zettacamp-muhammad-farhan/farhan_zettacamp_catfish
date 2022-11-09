import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink/dist/subsink';
import { PromoService } from '../promo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit, OnDestroy {

  spinnerDisp = false
  spin:any = ""

  subs = new SubSink();
  promos:{}[] = []

  constructor(
    private promoService:PromoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.promoService
    .getPromos()
    .valueChanges.subscribe(
      (data:any) => {
        if(data){
          this.hideSpinner()
        }
        console.log(data.data.GetAllPromos);
        data.data.GetAllPromos.map(
          (promos:any)=>{
            this.promos.push(promos)
          }
        )
        
        // this.promos = (data.data.GetAllPromos)
      }
    )

    this.promoService.getSpin().subscribe(
      resp=>{
        this.spinnerDisp = resp
        console.log(resp);
        
      }
    )
  }

  addData(){
    this.router.navigate(['add-promos'])
  }

  updateData(post:any){
    this.promos.push(post)
  }

  hideSpinner(){
    this.spinnerDisp = true
    
  }

  ngOnDestroy(): void {
    this.subs.sink?.unsubscribe()
  }

}
