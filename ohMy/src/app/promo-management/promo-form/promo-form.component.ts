import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { PromoService } from '../promo.service';
import { PromoListComponent } from '../promo-list/promo-list.component';

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss']
})
export class PromoFormComponent implements OnInit {

  formPromos:any

  constructor(
    private promoServ:PromoService,
    private route:Router,
    // private promoList : PromoListComponent
  ) { }

  ngOnInit(): void {
    this.formPromos = new FormGroup({
      ref: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      subtitle: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.formPromos.valid);
    if(this.formPromos.valid){
      this.promoServ.postPromos(this.formPromos.value)
      Swal.fire({
        icon: "success",
        title:"Success!!!",
        text:"Success Add data Promo",
        confirmButtonText:"Okay mang"
      })
      this.promoServ.getPromos().refetch()
      this.promoServ.changeSpin()
      // this.promoList.update(this.formPromos.valid)
      this.route.navigate(['/'])
    } else {
      Swal.fire({
        icon: "error",
        title:"Failed!!!",
        text:"Please fill field data Promo",
        confirmButtonText:"Okay mang"
      })
    }
  }

}
