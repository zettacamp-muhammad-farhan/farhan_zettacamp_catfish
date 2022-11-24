import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MenuService } from '../menu.service';
import { CartService } from 'src/app/cart-management/cart.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  formCart:any

  constructor(
    private menuServ:MenuService,
    public dialogRef:MatDialogRef<MenuAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private cartServ:CartService
  ) { }

  ngOnInit(): void {
    this.formCart = new FormGroup({
      amount: new FormControl(null, Validators.required),
      note: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    if(this.formCart.valid){
      this.formCart.value.amount = parseInt(this.formCart.value.amount)
      this,this.formCart.value.recipe_id = this.data.id
      console.log(this.formCart.value);
      
      this.menuServ.addCart(this.formCart.value).subscribe(
        data=>{
          this.cartServ.getCart({page:0, limit:10}).refetch();
          Swal.fire(
            'Gotcha!!!', 'success'
          )
        }
      )
      this.dialogRef.close(true)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must fill field'
      })
    }
  }

}
