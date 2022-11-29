import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private apollo:Apollo,
    private router:Router
  ) { }

  signUp(input:any){
    return this.apollo.mutate({
      mutation: gql `
      mutation register($input: UserSignup) {
        signUp(input: $input) {
          email
          first_name
          last_name
          status
          user_type {
            name
            view
          }
        }
      }
      `,
      variables:{input}
    })
  }
}
