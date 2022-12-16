import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';


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

  // to allert checkout > 5 min will delete
  deleteCheckout:BehaviorSubject<any> = new BehaviorSubject<any>(false)
 
  nav$:BehaviorSubject<Nav[]> = new BehaviorSubject<Nav[]>(this.nav);

  login$:BehaviorSubject<Log> = new BehaviorSubject<Log>({name:"Logout", "icon":"supervisor_account"})

  constructor(
    private apollo:Apollo
  ) { }

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


  getWallet(){
    const usr:any = localStorage.getItem('user') ? localStorage.getItem('user') : false

    let email = ""
    if(usr !== false){
      email = JSON.parse(usr).email
    }

    // console.log(email);
    
    return this.apollo.watchQuery({
      query:gql`
      query Query($filter: OneUserFilter) {
        getOneUser(filter: $filter) {
          wallet
        }
      }
      `, 
      variables : {
        "filter": {
          email
        }
      },
      fetchPolicy:'network-only'
    })
  }

  setTo(val:any){
    this.deleteCheckout.next(val)
  }
  getStatusCheckout(){
    return this.deleteCheckout.asObservable()
  }

  getTransaction(){
    return this.apollo.watchQuery({
      query:gql`
      query Query($pagination: Paging) {
        getAllTransactions(pagination: $pagination) {
          _id
          order_status
          confirm
        }
      }
      `,
      variables:{
        "pagination": {
          "page": 0,
          "limit": 3
        }
      },
      fetchPolicy:'network-only'
    })
  }

  getPending(){
    return this.apollo.watchQuery({
      query:gql`
        query getPending($filter: DataFilterTransaction) {
          getAllTransactions(filter: $filter) {
            _id
            menu {
              _id
              recipe_id {
                _id
                available
                recipe_name
              }
            }
            order_status
          }
        }
      `,
      variables:{
                  "filter": {
                    "order_status": "pending"
                  }
                }
    })
  }

  getOneTrans(){
    return this.apollo.watchQuery({
      query:gql`
            query getOneTrans($filter: OneFilterTransaction) {
            getOneTransactions(filter: $filter) {
              _id
              menu {
                recipe_id {
                  recipe_name
                }
                note
                amount
              }
            }
          }
      `,
      variables:{
                  "filter": {
                    "id": "639ae336adef2b67c983c445"
                  }
                }
    })
  }

  confirm(id:any){
    return this.apollo.mutate({
      mutation:gql`
      mutation changeconfirm($input: Cancel) {
        cancelConfirmation(input: $input) {
          menu {
            _id
            recipe_id {
              recipe_name
            }
          }
        }
      }
      `,
      variables:{
        "input": {
          "id": id
        }
      }
    })
  }
}

