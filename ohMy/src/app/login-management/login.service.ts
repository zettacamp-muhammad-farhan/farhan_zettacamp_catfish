import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from '@apollo/client';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apollo:Apollo
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
        this.userLogin(resp)
        return resp
        
      })
    )
  }

  userLogin(data:any){
    console.log(data);
    localStorage.setItem(environment.tokenKey, JSON.stringify(data.data.login.token));
    // localStorage.setItem('user', data.data.login.)
    const permission = JSON.stringify(data.data.login.user);
    localStorage.setItem('user', permission)

  }

  logOut() {
    Swal.fire({
      title: 'Are you sure to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(environment.tokenKey);
        localStorage.removeItem('user');
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
