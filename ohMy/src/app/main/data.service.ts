import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _jsonURL = 'assets/json/mentor.json'
  users:any
  private user:BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) { 
    this.getJSON().subscribe(
      data=>{
        this.user.next(data)
        this.users = data
      }
    )
  }
  getJSON(){
    return this.http.get(this._jsonURL)
  }
  getData(){
    return this.user.asObservable()
  }
  seacrh(val:any){
    for(let i = 0; i<this.users.length; i++){
      if(this.users[i].first_name.includes(val)){
        // console.log(this.users[i]);
      }
    }
    return this.user
  }


}
