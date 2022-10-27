import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users$ :BehaviorSubject<any>;

  users = [
    {
      id : 1,
      name: "Ryan",
      age: 20,
      gender: "Male",
      email: 'Ryx@gmail.co',
      position: "director",
      martial:"single",
      address: "st.munggur",
      zip:11001,
      city:"Cew City",
      country:"New Island"
    },
    {
      id : 2,
      name: "Tia",
      age: 22,
      gender: "Female",
      email: 'Tyzza@gmail.co',
      position: "actor",
      martial:"single",
      address: "st.padjajaran",
      zip:11001,
      city:"Cew City",
      country:"New Island"
    },
    {
      id : 3,
      name: "Vim",
      age: 25,
      gender: "Male",
      email: 'Vvyx@gmail.co',
      position: "director",
      martial:"maried",
      address: "st.Longlasting",
      zip:11008,
      city:"Old City",
      country:"Old Island"
    },
  ]

  constructor() {
      this.users$ = new BehaviorSubject<any>(this.users)
  }

  getUsers(){
    return this.users$.asObservable();
  }
  addUser(val:any){
    this.users.push(val);
    this.users$.next(this.users)
  }
}
