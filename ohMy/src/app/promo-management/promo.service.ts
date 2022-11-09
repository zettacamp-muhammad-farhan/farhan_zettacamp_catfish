import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  promo = new BehaviorSubject<any>([])

  constructor(
    private apollo:Apollo
  ) { }

  getPromos() {
    return this.apollo
    .query({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 10, page: 0 }) {
            _id
            image_url
            title
            sub_title
            ref
            description
          }
        }
      `,
    });
  }

  addPromos(){
    // this.apollo
    // .mutate({
    //   mutation: gql`
    //   mutation{
    //     CreatePromo(promo_input:{
    //       ref: "promoSatu23"
    //       title : "satu nusa satu bangsa"
    //       sub_title : "satu bahasa kita"
    //       description : "tanah air pasti jaya"
    //     }){
    //       ref
    //       title
    //       sub_title
    //       description
    //     }
    //   }
    //   `
    // })
    // .subscribe(
    //   data => {
    //     console.log(data);
        
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }


}
