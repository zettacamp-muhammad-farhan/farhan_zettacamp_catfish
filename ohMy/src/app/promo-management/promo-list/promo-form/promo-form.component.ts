import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PromoService } from '../../promo.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss']
})
export class PromoFormComponent implements OnInit {

  formPromos:any

  constructor(
    public dialogRef: MatDialogRef<PromoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private promoService:PromoService,
    private route:Router
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
      this.promoService.postPromos(this.formPromos.value)
      Swal.fire({
        icon: "success",
        title:"Success!!!",
        text:"Success Add data Promo",
        confirmButtonText:"Okay mang"
      })
      // this.promoService.getPromos().refetch()
      // this.promoList.update(this.formPromos.valid)
      // this.route.navigate(['/'])
      this.dialogRef.close();
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
