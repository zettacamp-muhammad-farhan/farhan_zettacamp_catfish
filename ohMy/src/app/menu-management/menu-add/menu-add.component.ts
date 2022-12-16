import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MenuService } from '../menu.service';
import { CartService } from 'src/app/cart-management/cart.service';
import { AppService } from 'src/app/app.service';
import { TranslateService } from '@ngx-translate/core';

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
    private cartServ:CartService,
    private router : Router, 
    private appServ:AppService,
    private translate:TranslateService
  ) { }

  ngOnInit(): void {
    this.formCart = new FormGroup({
      amount: new FormControl(null, [Validators.required]),
      note: new FormControl(null)
    })
  }

  onSubmit(){
    if(this.formCart.valid){
      this.formCart.value.amount = parseInt(this.formCart.value.amount)
      this,this.formCart.value.recipe_id = this.data.id
      // console.log(this.formCart.value);
      
      this.menuServ.addCart(this.formCart.value).subscribe(
        data=>{
          this.cartServ.getCart({page:0, limit:10}).refetch();
          Swal.fire(
            'You success add menu to cart',
            'You have 5 minutes to checkout your menu, if you not checkout item will be failed',
            'success'
          )
          this.appServ.setTo(false)
          this.appServ.setTo(true)
        }, (error:any) => {
          // console.log(error.message);

          if(error.message == "Amount cannot below 0"){
            Swal.fire(
              'amount cant below 0',
              'check again amount !!',
              'error'
            )
          }else {
            Swal.fire({
              title: 'This menu already at cart',
              text: "if you want increase item you can edit at cart",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Go to cart'
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/cart'])
              }
            })
          }
          
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

  close(){

    // this.dialogRef.close(true)

    Swal.fire({
      title: 'Whoaa',
      text: "Are you sure to close ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
          this.dialogRef.close(true) 
      }
    })
  }

}
