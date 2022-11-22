import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() recipe:any
  recipes:any

  value:number = 1

  constructor(
    private cartServ:CartService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipe.menu
    console.log(this.recipes);
    console.log(this.recipe);
    
    
  }

  increaseVal(){
    this.value++
  }
  decreaseVal(){
    if(this.value > 0){
      this.value--
    } else {
      this.value = this.value
      alert('you cant decrease item at 0 !!!')
    }
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
              this.cartServ.getCart({page:0, limit:5}).refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }
        )

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
              this.cartServ.getCart({page:0, limit:10}).refetch()
              Swal.fire(
                'Horray!',
                'Item has been Bought.',
                'success'
              )
            }
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
              this.cartServ.getCart({page:0, limit:5}).refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }
        )
      }
    })
  }

}
