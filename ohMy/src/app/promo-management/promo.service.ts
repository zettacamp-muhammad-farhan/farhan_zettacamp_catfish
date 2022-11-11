import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  promo = new BehaviorSubject<any>([])

  private query:any

  constructor(
    private apollo : Apollo
  ) { }

  getPromos(pagination:any) {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllPromos($pagination:PaginationInput) {
          GetAllPromos(pagination: $pagination ) {
            _id
            image_url
            title
            sub_title
            ref
            description
          }
        }
      `,
      variables:{pagination}
    });
  }

  getPromosLength() {
    return this.apollo
          .query({
                query: gql`
                query GetAllPromos($pagination:PaginationInput!) {
                  GetAllPromos(pagination: $pagination ) {
                    _id
                    image_url
                    title
                    sub_title
                    ref
                    description
                  }
                }
                `,
                variables: { pagination: { page: 0, limit: 0 } }
          })
          .pipe(map((response: any) => {
                const data = response.data.GetAllPromos;
                return data.length;
          }));
}

  postPromos(post:any){
    let {ref, title, subtitle, img, description} = post
    console.log(post);
    

    this.query = gql `
    mutation CreatePromo($ref:String, $img:String, $title:String, $subtitle:String, $description:String) {
      CreatePromo(promo_input:{
        ref:$ref
        image_url: $img
        title: $title
        sub_title : $subtitle
        description : $description
      }){
        ref
        image_url
        title
        sub_title
        description
      }
    }`;

    return this.apollo.mutate({
      mutation: this.query,
      variables: {
        ref,title, subtitle, img, description
      }

    }).subscribe(
      ({data})=>{
        console.log(data);
        
      }, error => {
        console.log(error);
        
      }
    )
    
    console.log('success');
    
  }

}
