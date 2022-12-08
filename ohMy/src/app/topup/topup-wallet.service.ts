import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TopupWalletService {

  constructor(
    private apollo: Apollo
  ) { }

  topUp(input:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation Mutation($input: TopUp) {
        topUp(input: $input) {
          _id
          wallet
        }
      }
      `,
      variables:{
        input
      }
    })
  }


}
