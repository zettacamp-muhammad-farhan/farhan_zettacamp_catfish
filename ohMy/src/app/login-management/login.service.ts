import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from '@apollo/client';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apollo:Apollo,
    private router:Router
  ) { }

  loginUser(input:any){
    return this.apollo.mutate({
      mutation: gql `
      mutation Mutation($input: UserLogin) {
        login(input: $input) {
          token
          user {
            user_type {
              name
              view
            }
            _id
            email
          }
        }
      }
      `,
      variables:{input}
    }).pipe(
      map((resp:any) => {
        // console.log(resp);
        
        this.userLogin(resp)
        return resp
      })
    )
  }

  userLogin(data:any){
    // console.log(data);
    localStorage.setItem(environment.tokenKey, JSON.stringify(data.data.login.token));
    // localStorage.setItem('user', data.data.login.)
    const permission = JSON.stringify(data.data.login.user);
    localStorage.setItem('user', permission)
  }


}
