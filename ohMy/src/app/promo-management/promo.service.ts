import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  promo = new BehaviorSubject<any>([])

  private query:any

  private spin = new BehaviorSubject<boolean>(false)

  constructor(
    private apollo:Apollo
  ) { }
  
  getPromos() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 1000, page: 0 }) {
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

  changeSpin(){
    return this.spin.next(true)
  }

  getSpin(){
    return this.spin.asObservable()
  }
  

}
