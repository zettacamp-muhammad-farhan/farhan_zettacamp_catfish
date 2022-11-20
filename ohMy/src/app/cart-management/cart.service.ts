import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private query:any

  constructor(
    private apollo:Apollo
  ) { }

  getCart(data:any){
    console.log(data);
    
    let pagination=data;
    let filter= {user_lname:"User", order_status:"pending"}
    return this.apollo.watchQuery({
      query:gql`
      query QueryTransaction($pagination: Paging, $filter: DataFilterTransaction) {
        getAllTransactions(pagination: $pagination, filter: $filter) {
          _id
          menu {
            recipe_id {
              recipe_name
              _id
              image
              price
            }
            amount
            note
          }
          order_date
          order_status
          status
          user_id {
            _id
            last_name
          }
        }
      }
      `,
      variables:{
        pagination,
        filter
      }
    })
  }

  getCartLength(){
    // let data:any = localStorage.getItem('user') ? localStorage.getItem('user') : ""
    // JSON.parse(data)
    let user_lname = "User"
    let order_status = "pending"
    return this.apollo
    .query({
      query: gql `
      query Query($filter: DataFilterTransaction, $pagination: Paging) {
        getAllTransactions(filter: $filter, pagination: $pagination) {
          _id
          order_status
          status
        }
      }
      `,
      variables: {
        pagination: {limit:100, page:0},
        filter:{user_lname, order_status}
      }
    })
    .pipe(map((resp:any) => {
      const data = resp.data.getAllTransactions;
      return data.length
    }))
  }
}
