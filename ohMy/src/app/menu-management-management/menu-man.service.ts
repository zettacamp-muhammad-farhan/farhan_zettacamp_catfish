import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MenuManService {

  query:any

  constructor(
    private apollo: Apollo
  ) { }

  getRecipes(paging: any, recipe_name:any, status:any) {
    return this.apollo.query({
      query: gql`
        query getAllRecipes($filter: DataFilterForRecipe, $paging: Paging, $status: Status) {
          getAllRecipes(filter: $filter, paging: $paging, status: $status) {
            
              _id
              ingredients {
                ingredient_id {
                  _id
                  name
                  stock
                  status
                }
                stock_used
              }
              recipe_name
              discount
              price
              status
              highlight
              special_offers
              image
              available
              count_result
              total_count
          }
        }
      `,
      variables: { 
        paging,
        filter: {
          recipe_name
        },
        status
       },
      fetchPolicy: "network-only"
    }

    ).pipe(
      map((data:any)=>{
        return data.data.getAllRecipes
      })
    )


  }

  getRecipesLenght() {
    return this.apollo
      .query({
        query: gql`
      query getAllRecipes($paging: Paging) {
        getAllRecipes(paging: $paging) {
          _id
          recipe_name
          status
        }
      }
      `,
        variables: { paging: { limit: 1000, page: 0 } }
      })
      .pipe(map((resp: any) => {
        const data = resp.data.getAllRecipes;
        return data.length
      }))
  }

  postRecipes(input:any){
    let {price, recipe_name, image, ingredients:{ingredient_id, stock_used}} = input
    price = parseInt(price)
    stock_used = parseInt(stock_used)

    input.price = price
    input.ingredients.stock_used = stock_used

    this.query = gql `
    mutation Mutation($input: DataInputRecipe) {
      createRecipe(input: $input) {
        ingredients {
          ingredient_id {
            _id
            stock
          }
        }
        _id
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        input
      }

    })
    
  }

  deleteRecipe(input:any){
    this.query = gql `
    mutation DeleteRecipe($input: DataDeleteRecipe) {
      deleteRecipe(input: $input) {
        _id
        recipe_name
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

  getIngridients(){
    return this.apollo.watchQuery({
      query: gql `
      query GetAllIngredients($paging: Paging) {
        getAllIngredients(paging: $paging) {
          TotalDocument
          data {
            _id
            name
            status
            stock
          }
        }
      }  
      `,
      variables:{paging:{limit:1000, page:0}}
    })
  }

  updateRecipes(input:any){
    console.log(input);
    this.query = gql `
    mutation UpdateRecipe($input: DataUpdateRecipe) {
      updateRecipe(input: $input) {
        _id
        recipe_name
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        input
      }

    })
  }

  updateSpecial(input:any){
    this.query = gql `
    mutation updateSpecial($input: DataUpdateRecipe) {
      updateRecipe(input: $input) {
        _id
        recipe_name
      }
    }
    `
    return this.apollo.mutate({
      mutation : this.query,
      variables: {
        input
      }
    })
  }

  updateHightlight(input:any){
    this.query = gql `
    mutation updatehighlight($input: DataUpdateRecipe) {
      updateRecipe(input: $input) {
        _id
        recipe_name
      }
    }
    `

    return this,this.apollo.mutate({
      mutation: this.query,
      variables:{
        input
      }
    })
  }

  getOneRecipes(filter:any){
    return this.apollo.watchQuery({
      query: gql `
      query Query($filter: OneDataFilter) {
        getOneRecipe(filter: $filter) {
          ingredients {
            ingredient_id {
              name
              stock
              _id
            }
          }
        }
      } 
      `,
      variables:{
        filter
      }
    })
  }

  updateStatus(input:any){
    return this.apollo.mutate({
      mutation: gql `
      mutation Mutation($input: DataUpdateRecipe) {
        updateRecipe(input: $input) {
          status
          _id
        }
      }
      `,
      variables:{input}
    })
  }

}
