import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<any>([])

  constructor(
    private apollo:Apollo
  ) { }

  getUsers(name: string) {
    return this.apollo.query({
      query: gql`
        query ($name: String) {
          GetAllUsers(last_name: $name, pagination: { limit: 20, page: 0 }) {
            _id
            first_name
            last_name
            status
            civility
          }
        }
      `,
      variables: {
        name,
      },
    });
  }
}
