import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AppService, Nav, Log } from './app.service';
import { LoginService } from './login-management/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohMy';

  loged!:boolean|null;

  logStatus!:Log[];

  nav!:Nav[]

  constructor(
    private login:LoginService,
    private router:Router,
    private appServ:AppService
  ) { }

  ngOnInit(){
    let data = localStorage.getItem('token') ? true : false
    this.loged = data;

    if(this.loged){
      this.appServ.getLogStatus().subscribe(
        (data:any)=>{
          this.logStatus = [ data ]
        }
      )
    } else {
      this.appServ.changeStatus({name:"Login", icon:"supervisor_account"})
      this.appServ.getLogStatus().subscribe(
        (data:any)=>{
          this.logStatus = [ data ]
        }
      )
    }

    

    // input nav data from service
    this.appServ.getNav().subscribe(
      (nav:any)=>{
        this.nav = nav;
      }
    )
    console.log(this.nav);
    
  }

  getLogin(){
    this.appServ.getLogStatus().subscribe(
      (data:any)=>{
        console.log(data);
        this.logStatus = [data]
      }
    )
  }

  public logIn(){
    this.appServ.changeStatus({name:"Logout", icon:"supervisor_account"});
    this.getLogin()
    this.router.navigate(['/'])
  }

  logOut(){
    Swal.fire({
      title: 'Are you sure to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.appServ.changeStatus({name:"Login", icon:"supervisor_account"});
        this.getLogin()
        this.router.navigate(['/'])
        localStorage.removeItem(environment.tokenKey);
        localStorage.removeItem('user');
        Swal.fire(
          'Log Out',
          'You success to logout',
          'success'
        )
      }
    })
  }

}
