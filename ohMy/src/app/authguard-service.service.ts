import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem("token")
  }

  getUserType(){
    let user:any = localStorage.getItem('user') ? localStorage.getItem('user') : false
    user = JSON.parse(user)
    if (user == false){
      return false;
    } else {
      return user.user_type[4].view 
    }
  }
  
}
