import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolServiceService {
  schools = new BehaviorSubject<any>([])
  constructor(
    private apollo:Apollo
  ) { }

  getSchool():Observable<any>{
    return this.apollo.query({
      query:gql`
      query {
        GetAllSchools(pagination:{
          limit:20
          page:0
        }){
          _id
          short_name
          long_name
          status
        }
      }
      `
    })
  }
}
