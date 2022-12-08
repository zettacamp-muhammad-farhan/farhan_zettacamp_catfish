import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HistoryService } from 'src/app/history-management/history.service';
import Swal from 'sweetalert2';
import { CartService } from '../../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartUpdateComponent } from '../../cart-update/cart-update.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() recipe:any
  recipes:any

  value:number = 1;

  updateForm:any

  constructor(
    private cartServ:CartService,
    private historyServ:HistoryService,
    private dialog:MatDialog,
    private appServ:AppService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipe.menu
    // console.log(this.recipes);
    
    this.updateForm = new FormGroup({
      amount: new FormControl(null),
      id:new FormControl(null)
    })

    this.updateForm.valueChanges.subscribe(
      (data:any)=>{
        // console.log(data);
      }
    )
    
  }

  openDialog(input:any){
    // console.log(input);
    const dialogRef = this.dialog.open(CartUpdateComponent, {
      width:"50%",
      data: {
        amount:input.amount,
        id:input.id,
        note:input.note
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        if(res){
          this.cartServ.getCart({limit:5, page:0}).refetch()
        }
        
      }
    )
  }
  


  deleteItem(id:any){
    Swal.fire({
      title: 'Are you sure to delete item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartServ.deleteItem(id).subscribe(
          (data:any)=>{
            if(data){
              this.cartServ.getCart({page:0, limit:5}).refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }
        )
          this.appServ.setTo(false)
      }
    })
  }

  buyItem(){
    Swal.fire({
      title: 'Are you sure?',
      text: "buy item",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, buy it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartServ.buy().subscribe(
          (res:any)=>{
            if(res){
              this.cartServ.getCart({page:0, limit:5}).refetch()
              this.historyServ.getHistory({page:0, limit:5}, "success")
              Swal.fire(
                'Horray!',
                'Item has been Bought.',
                'success'
              )
              this.appServ.setTo(false)
              
            }
          }, (error)=>{
            this.historyServ.getHistory({page:0, limit:5}, "failed")
            Swal.fire({
              icon: 'error',
              title: 'Failed...',
              text: 'your transaction failed because amount limit less than your order!'
            })
          }
        )

      }
    })

  }

  deleteCart(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartServ.deleteCart(id).subscribe(
          (data:any)=> {
            if(data){
              this.cartServ.getCart({page:0, limit:5}).refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted',
                'success'
              )

              this.appServ.setTo(false)

            }
          }
        )
      }
    })
  }

  increaseItem(amount:any, id:any){
    // console.log(amount);
    
    this.cartServ.increaseItem(amount+1, id).subscribe(
      (data:any)=>{
        if(data){
          this.cartServ.getCart({page:0, limit:10}).refetch()
        }
      }
    )
  }
  decreaseItem(amount:any, id:any){
    if(amount == 0){
      Swal.fire(
        'X',
        'you cant decrease when 0 item',
        'error'
      )
    } else {
      this.cartServ.increaseItem(amount-1, id).subscribe(
        (data:any)=>{
          if(data){
            this.cartServ.getCart({page:0, limit:10}).refetch()
          }
        }
      )
    }
  }

}
