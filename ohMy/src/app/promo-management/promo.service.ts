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
    return this.apollo.query({
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

}
