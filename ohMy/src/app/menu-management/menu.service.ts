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
        query getAllRecipes($paging: Paging, $status: Status) {
          getAllRecipes(paging: $paging, status: $status) {
              _id
              count_result
              total_count
              available
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
              image
              price
          }
        }
      `,
      variables:{paging, status: "active"},
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
      mutation AddCart($input: DataInputTransaction) {
        addCart(input: $input) {
          menu {
            amount
            note
            recipe_id {
              _id
            }
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
