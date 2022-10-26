import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private person$ : BehaviorSubject<any>
  private detailPerson$ = new BehaviorSubject<any>({})

  person = [
    {
      id:1,
      name:"Farhan",
      age: 22,
      status:"Fresher",
      address:"Jl.Munggur",
      number:"087777777"
    },
    {
      id:2,
      name:"Anna",
      age: 20,
      status:"Student",
      address:"Jl.Cempaka",
      number:"086666675"
    },
    {
      id:3,
      name:"Reva",
      age: 23,
      status:"Intermediete",
      address:"St.John 26",
      number:"019739173"
    },
    {
      id:4,
      name:"Kyle",
      age: 21,
      status:"Fresher",
      address:"St.New City",
      number:"01726841"
    },
    {
      id:5,
      name:"Diana",
      age: 22,
      status:"Fresher",
      address:"Jl.Diamond",
      number:"0876283"
    },
    {
      id:6,
      name:"Ryan",
      age: 25,
      status:"Middle",
      address:"Jl.Munggur",
      number:"087777777"
    }
  ]

  constructor() {
    this.person$ = new BehaviorSubject<any>(this.person)
   }

   getUser():Observable<any>{
    return this.person$.asObservable();
   }

   addPerson(item:any) {
    this.person.push(item);
    this.person$.next(this.person);
   }
   
   addDetail(val:any){
    let data = this.person.filter(m => {
      return m.id == parseInt(val)
      
    })
    // console.log(data);
    this.detailPerson$.next(data[0])
    
   }

  //  addDetail(val:any){
  //   this.detailPerson$.next(val)
  //  }
   
   getDetail(){
    return this.detailPerson$.asObservable()
   }
}
