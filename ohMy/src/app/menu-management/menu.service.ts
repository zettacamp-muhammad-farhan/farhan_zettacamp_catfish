import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private query:any

  constructor(
    private apollo:Apollo
  ) { }


  getRecipes(paging:any){
    return this.apollo.watchQuery({
      query:gql`
        query getAllRecipes($paging: Paging) {
          getAllRecipes(paging: $paging) {
            
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
              status
          }
        }
      `,
      variables:{paging},
      fetchPolicy: "network-only"
    }

    )
    
  }

  getRecipesLenght(){
    return this.apollo
    .query({
      query: gql `
      query getAllRecipes($paging: Paging) {
        getAllRecipes(paging: $paging) {
          _id
          recipe_name
          status
        }
      }
      `,
      variables: {paging: {limit:1000, page:0}}
    })
    .pipe(map((resp:any) => {
      const data = resp.data.getAllRecipes;
      return data.length
    }))
  }

  addCart(val:any){
    return this.apollo.mutate({
      mutation:gql `
      mutation Mutation($input: DataInputTransaction) {
        createTransaction(input: $input) {
          total
          _id
          status
          user_id {
            _id
            email
          }
          menu {
            amount
            note
          }
        }
      }
      
      `,
      variables:{
        input : {
          menu : [
            val
          ]
        }
      }
    })
  }


}
