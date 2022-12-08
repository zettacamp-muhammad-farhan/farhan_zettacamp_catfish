import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { fromPromise } from '@apollo/client';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-update',
  templateUrl: './cart-update.component.html',
  styleUrls: ['./cart-update.component.scss']
})
export class CartUpdateComponent implements OnInit {

  formMenu:any

  constructor(
    private cartServ : CartService,
    public dialogRef:MatDialogRef<CartUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.formMenu = new FormGroup({
      amount: new FormControl(this.data.amount, Validators.required),
      note: new FormControl(this.data.note)
    })
  }

  onSubmit(){
    // console.log(this.formMenu.value);
    const data = this.formMenu.value;
    data.id = this.data.id
    console.log(data);
    data.amount = parseInt(data.amount)
    
    this.cartServ.updateTranscation(data).subscribe(
      (data:any)=>{
        console.log(data);
        this.cartServ.getCart({limit:5, page:0}).refetch()
        
        Swal.fire({
          position:'center',
          icon: 'success',
          title : 'Success edit data',
          confirmButtonText : 'okay'
        })
        this.dialogRef.close(true)
      }, err => {
        Swal.fire({
          position:'center',
          icon: 'error',
          title : 'update failed, our stock less than your order !!!',
          confirmButtonText : 'okay'
        })
      }
    )


    if(this.formMenu.valid){

    }else {
      Swal.fire({
        position:'center',
        icon: 'error',
        title : 'Fill form before submit !!!',
        confirmButtonText : 'okay'
      })
    }
  }

  close(){
    this.dialogRef.close(true)
  }

}
