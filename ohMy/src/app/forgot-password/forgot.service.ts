import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  tempEmail = new BehaviorSubject("")

  constructor(
    private apollo:Apollo
  ) { }

  changePass(input:any){
    return this.apollo.mutate({
      mutation: gql `
      mutation Mutation($input: ForgetPass) {
        forgetPass(input: $input) {
          _id
          email
          first_name
          last_name
        }
      }
      `, 
      variables:{input}
    })
  }

  getUser(input:any){
    return this.apollo.query({
      query: gql `
      query GetOneUser($filter: OneUserFilter) {
        getOneUser(filter: $filter) {
          _id
          email
        }
      }
      `, 
      variables:{
        filter:{
          email : input
        }
      }
    })
  }

  saveTemp(input:string){
    this.tempEmail.next(input);
  }
  getTemp(){
    return this.tempEmail.asObservable()
  }

}
