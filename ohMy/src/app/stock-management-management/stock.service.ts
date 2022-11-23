import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private query:any

  constructor(
    private apollo:Apollo
  ) { }

  getIngridients(paging:any, name:any){
    return this.apollo.query({
      query: gql `
      query GetAllIngredients($paging: Paging, $filter: DataFilterIngredients) {
        getAllIngredients(paging: $paging, filter: $filter) {
          TotalDocument
          countResult
          data {
            _id
            name
            status
            stock
          }
        }
      }
      `,
      variables:{
        paging,
        filter: {
          name
        }
      }
    })
  }

  postIngirdient(input:any){
    let {name, stock} = input
    stock = parseInt(stock)
    console.log(input);
    

    this.query = gql `
    mutation Mutation($input: DataInsert) {
      insertIngredient(input: $input) {
        name
        status
        stock
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        input :{name, stock}
      }

    })
    
    
  }

  deleteIngirdient(input:any){
    console.log(input);
    this.query = gql `
    mutation Mutation($input: DataDelete) {
      deleteIngredient(input: $input) {
        _id
        name
        status
        stock
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        input
      }

    })
    
    console.log('success');
    
  }

  updateIngirdient(input:any){
    console.log(input);
    this.query = gql `
    mutation Mutation($input: DataUpdate) {
      updateIngredient(input: $input) {
        _id
        name
        status
        stock
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        input
      }

    })
  }

}
