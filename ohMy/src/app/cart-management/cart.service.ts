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

  getRecipes(data:any){
    return this.apollo.watchQuery({
      query:gql`
        query GetAllrecipes($data: recipeParams) {
          GetAllrecipes(data: $data) {
            data {
              _id
              ingredients {
                ingredient_id {
                  _id
                  name
                  stock
                  available
                  status
                }
                stock_used
              }
              price
              recipe_name
              status
              link_recipe
            }
          }
        }
      `,
      variables:{data}
    })
  }

  getRecipesLenght(){
    return this.apollo
    .query({
      query: gql `
      query GetAllrecipes($data: recipeParams) {
        GetAllrecipes(data: $data) {
          data {
            _id
            price
            recipe_name
            status
            link_recipe
          }
        }
      }
      `,
      variables: {data: {limit:0, page:0}}
    })
    .pipe(map((resp:any) => {
      const data = resp.data.GetAllrecipes;
      return data.length
    }))
  }
}
