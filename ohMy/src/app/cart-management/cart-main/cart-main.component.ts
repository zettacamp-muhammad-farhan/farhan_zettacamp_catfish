import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { CartUpdateComponent } from '../cart-update/cart-update.component';


@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.scss']
})
export class CartMainComponent implements OnInit {

  // @ViewChild('paginator') paginator!: MatPaginator;
  // length = 5
  // pageSizeOptions: number[] = [5, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 5
  }

  subs = new SubSink();

  loaded = false

  recipes:{}[] = []

  constructor(
    private cartServ:CartService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.cartServ
    .getCart(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        if(data){
          this.loaded = true
        }
        this.recipes = data.data.getAllTransactions;
        // console.log(this.recipes);
      }
    )
    // this.initPaginator()
  }

  // openDialog(input:any){
  //   const dialogRef = this.dialog.open(CartUpdateComponent, {
  //     width:"50%",
  //     data: {
  //       hola:"test"
  //     }
  //   })
  //   dialogRef.afterClosed().subscribe(
  //     res=>{
  //       if(res){
  //         this.cartServ.getCart(this.pagination).refetch()
  //       }
        
  //     }
  //   )
  // }

  refetchData() {
    const pagination = this.pagination;
    this.cartServ.getCart(pagination).refetch();
  }

}
