import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users$ :BehaviorSubject<any>;
  private user$ :BehaviorSubject<any> = new BehaviorSubject<any>({})

  users = [
    {
      id : 1,
      name: "Ryan",
      age: 20,
      gender: "Male",
      email: 'Ryx@gmail.co',
      position: "director",
      martial:"single",
      addresses: {
        address: "st.mungur",
        zip:234567,
        city:"add City",
        country:"New Zelland"
      }
    },
    {
      id : 2,
      name: "Tia",
      age: 22,
      gender: "Female",
      email: 'Tyzza@gmail.co',
      position: "actor",
      martial:"single",
      addresses: {
        address: "st.padjajaran",
        zip:11001,
        city:"Cew City",
        country:"New Island"
      }

    },
    {
      id : 3,
      name: "Vim",
      age: 25,
      gender: "Male",
      email: 'Vvyx@gmail.co',
      position: "director",
      martial:"maried",
      addresses: {
        address: "st.Middle Wave",
        zip:45678,
        city:"Zew City",
        country:"Island Buff"
      }
    },
  ]

  constructor() {
      this.users$ = new BehaviorSubject<any>(this.users)
  }

  getUsers(){
    return this.users$.asObservable()
  }
  addUser(val:any){
    this.users.push(val);
    this.users$.next(this.users)
  }

  getUser(val:any){
    // console.log(val);
    // console.log(this.users);
    let yser = this.users.filter(p=> p.id == parseInt(val));

    return yser;
  }

  editUser(val:any, content:any){
    let index:number = 0
    for(let i = 0; i<this.users.length; i++){
      if(this.users[i] == val){
         index = i
         break
      } 
    }
    this.users[index] = content;
    this.users$.next(this.users)
  }
}
