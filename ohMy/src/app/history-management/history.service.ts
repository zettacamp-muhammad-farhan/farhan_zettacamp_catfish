import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private apollo:Apollo) { }

  getHistory(pagination:any,order_status:any){
    return this.apollo.watchQuery({
      query:gql`
      query Trans($pagination: Paging, $filter: DataFilterTransaction) {
        getAllTransactions(pagination: $pagination, filter: $filter) {
          _id
          count
          total
          total_docs
          menu {
            _id
            note
            amount
            recipe_id {
              image
              recipe_name
              price
              discount
            }
          }
          order_status
          order_date
        }
      }
      `,
      variables:{
        pagination,
        "filter": {
          order_status
        }
      },
      fetchPolicy: "network-only"
    })
  }

  getIncome(){
    return this.apollo.query({
      query:gql `
      query GetIncome {
        getIncome {
          balance
          count
          sold
        }
      }
      `
    })
  }

  getHistoryAd(pagination:any){
    return this.apollo.watchQuery({
      query:gql`
      query succes($pagination: Paging) {
        getSuccessTransactions(pagination: $pagination) {
          count
          sold
          total
          menu {
            recipe_id {
              recipe_name
              discount
            }
            amount
          }
          _id
          order_date
          user_id {
            email
          }
        }
      }
      `,
      variables:{
        pagination
      },
      fetchPolicy: "network-only"
    })
  }
}
