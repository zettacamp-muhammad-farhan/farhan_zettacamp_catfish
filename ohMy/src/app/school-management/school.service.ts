import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private apollo:Apollo
  ) { }

  getSchools() {
    return this.apollo.query({
      query: gql`
        query {
          GetAllSchools(pagination: { limit: 10, page: 0 }) {
            _id
            short_name
            long_name
            status
          }
        }
      `,
    });
  }
}
