import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {User} from './list-data/user'

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  user:User[] = [{first_name:"", last_name:"", civility:"", "birth_day":"", gender:""}]
  private user$:BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor(private httpService:HttpClient) {
    this.user.pop()
    this.getUser().subscribe(
      (data:any)=>{
        data.map((usr:User)=>{
          this.user.push(usr)
        })
      }
    )
  }
  getUser(){
    return this.httpService.get('/assets/user.json');
  }
  getDataUser(){
    this.user$.next(this.user)
    return this.user$.asObservable()
  }
  addDataUser(val:any){
    this.user.push(val);
    this.user$.next(this.user);
  }
}
