import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { fromPromise } from '@apollo/client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss']
})
export class PromoFormComponent implements OnInit {

  formPromos:any

  constructor() { }

  ngOnInit(): void {
    this.formPromos = new FormGroup({
      ref: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      subtitle: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    if(this.formPromos.vaid){
      console.log(this.formPromos.value);
      
    }
  }

}
