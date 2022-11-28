import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Nav {
  name:string,
  icon:string,
  route:string,
  permission:boolean
}
export interface Log {
  name:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  nav:Nav[] = [
    {
      route:"",
      icon:"home",
      permission:true,
      name:"Homepage"
    },
    {
      route:"menu",
      icon:"apps",
      permission:true,
      name:"Menu"
    },
    {
      route:"cart",
      icon:"shopping_cart",
      permission:true,
      name:"Cart"
    },
    {
      route:"history",
      icon:"",
      permission:true,
      name:"History"
    },
    {
      route:"stock-management",
      icon:"list",
      permission:false,
      name:"Stock Management"
    },
    {
      route:"menu-management",
      icon:"list",
      permission:false,
      name:"Menu Management"
    },
    {
      route:"about",
      icon:"widgets",
      permission:true,
      name:"About"
    }
  ]

  navAd:Nav[] = [
    {
      route:"",
      icon:"home",
      permission:true,
      name:"Homepage"
    },
    {
      route:"menu",
      icon:"apps",
      permission:true,
      name:"Menu"
    },
    {
      route:"cart",
      icon:"shopping_cart",
      permission:true,
      name:"Cart"
    },
    {
      route:"history",
      icon:"",
      permission:true,
      name:"History"
    },
    {
      route:"stock-management",
      icon:"list",
      permission:true,
      name:"Stock Management"
    },
    {
      route:"menu-management",
      icon:"list",
      permission:true,
      name:"Menu Management"
    },
    {
      route:"about",
      icon:"widgets",
      permission:true,
      name:"About"
    }
  ]

  navNotLog:Nav[] = [
    {
      route:"",
      icon:"home",
      permission:true,
      name:"Homepage"
    },
    {
      route:"menu",
      icon:"apps",
      permission:true,
      name:"Menu"
    },
    {
      route:"cart",
      icon:"shopping_cart",
      permission:false,
      name:"Cart"
    },
    {
      route:"stock-management",
      icon:"list",
      permission:false,
      name:"Stock Management"
    },
    {
      route:"menu-management",
      icon:"list",
      permission:false,
      name:"Menu Management"
    },
    {
      route:"about",
      icon:"widgets",
      permission:true,
      name:"About"
    }
  ]

 
  nav$:BehaviorSubject<Nav[]> = new BehaviorSubject<Nav[]>(this.nav);

  login$:BehaviorSubject<Log> = new BehaviorSubject<Log>({name:"Logout", "icon":"supervisor_account"})

  constructor() { }

  changeAdmin(){
    this.nav$.next(this.navAd);
    return this.nav$.asObservable()
  }

  changeNotLog(){
    this.nav$.next(this.navNotLog);
    return this.nav$.asObservable()
  }

  getNav(){
    return this.nav$.asObservable()
  }
  getLogStatus(){
    return this.login$.asObservable()
  }
  changeStatus(value:Log){
    this.login$.next(value)
  }
}

