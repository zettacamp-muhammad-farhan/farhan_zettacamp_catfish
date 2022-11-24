import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

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

  recipes:{}[] = []

  constructor(
    private cartServ:CartService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.cartServ
    .getCart(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        this.recipes = data.data.getAllTransactions;
        console.log(this.recipes);
      }
    )
    // this.initPaginator()
  }

  // initPaginator() {
  //   this.cartServ
  //     .getCartLength()
  //     .subscribe((length: number) => {
  //         // update paginator length
  //         this.paginator.length = length;
  //         this.paginator.pageSize = this.pageSizeOptions[0]; // 5
  //     });
  // }

  // onPaginatorChange(event: PageEvent) {
    
  //   this.pagination.limit = event.pageSize;
  //   this.pagination.page = event.pageIndex;

  //   // refetch data
  //   this.refetchData();
  // } 

  refetchData() {
    const pagination = this.pagination;
    this.cartServ.getCart(pagination).refetch();
  }

}
