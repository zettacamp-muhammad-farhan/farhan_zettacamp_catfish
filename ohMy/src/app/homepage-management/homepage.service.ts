import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(
    private apollo:Apollo
  ) { }

  getRecipesSpecial(paging:any){
    return this.apollo.watchQuery({
      query:gql`
      query GetAllRecipes($special: Boolean) {
        getAllRecipes(special: $special) {
          _id
          available
          recipe_name
          status
          highlight
          special_offers
          image
          price
          count_result
          discount
        }
      }
      `, 
      variables:{
        "special": true
      },
      fetchPolicy: "network-only"
    })
  }

  getRecipesHighlight(paging:any){
    
    return this.apollo.watchQuery({
      query:gql`
      query GetAllRecipes($highlight: Boolean) {
        getAllRecipes(highlight: $highlight) {
          _id
          available
          recipe_name
          status
          highlight
          special_offers
          image
          price
          count_result
        }
      }`, 
      variables:{
        highlight : true
      },
      fetchPolicy: "network-only"
    })
  }


}
