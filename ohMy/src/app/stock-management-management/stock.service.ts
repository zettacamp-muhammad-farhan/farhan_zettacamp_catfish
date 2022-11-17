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

  getIngridients(paging:any){
    return this.apollo.watchQuery({
      query: gql `
      query Query($paging: Paging) {
        getAllIngredients(paging: $paging) {
          _id
          name
          status
          stock
        }
      }  
      `,
      variables:{paging}
    })
  }

  getIngridientsLenght(){
    return this.apollo
    .query({
      query: gql`
      query Query($paging: Paging) {
        getAllIngredients(paging: $paging) {
          _id
        }
      }
      `,
      variables:{paging:{limit:1000, page:0}}
    })
    .pipe(map((resp: any) => {
      const data = resp.data.getAllIngredients;
      return data.length
    }))
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

    }).subscribe(
      ({data})=>{
        console.log(data);

        Swal.fire({
          position:'center',
          icon: 'success',
          title : 'Success add data',
          confirmButtonText : 'okay'
        })
        
      }, error => {
        console.log(error);

        Swal.fire({
          position:'center',
          icon: 'error',
          title : error,
          confirmButtonText : 'okay'
        })

        
      }
    )
    
    console.log('success');
    
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

    }).subscribe(
      ({data})=>{
        console.log(data);

        Swal.fire({
          position:'center',
          icon: 'success',
          title : 'Success Delete data',
          confirmButtonText : 'okay'
        })
        
      }, error => {

        console.log(error);
        
        Swal.fire({
          position:'center',
          icon: 'error',
          title : error,
          confirmButtonText : 'okay'
        })
      }
    )
    
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

    }).subscribe(
      ({data})=>{
        console.log(data);

        Swal.fire({
          position:'center',
          icon: 'success',
          title : "Success update",
          confirmButtonText : 'okay'
        })
        
      }, error => {

        console.log(error);
        
        Swal.fire({
          position:'center',
          icon: 'error',
          title : error,
          confirmButtonText : 'okay'
        })
      }
    )
    
    console.log('success');
    
  }

}
