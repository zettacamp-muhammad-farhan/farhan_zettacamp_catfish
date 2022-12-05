import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AppService, Nav, Log } from './app.service';
import { AuthguardServiceService } from './authguard-service.service';
import { LoginService } from './login-management/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // user data
  user:any
  // if login as admin return true
  adm!:boolean

  title = 'ohMy';

  language:string = "en"

  loged!:boolean|null;

  logStatus!:Log[];

  // save nav temp
  nav!:Nav[]

  constructor(
    private login:LoginService,
    private router:Router,
    private appServ:AppService,
    private guard:AuthguardServiceService,
    private translate:TranslateService
  ) { }

  ngOnInit(){



    const usr:any = localStorage.getItem('user') ? localStorage.getItem('user') : false
    if(usr !== false){
      
      
      const user = JSON.parse(usr)
      this.user = user
      console.log(this.user);
      this.adm = user.user_type[4].view // if admin true

      //if user(not admin)
      if(user.user_type[4].view == false){
        this.appServ.getNav().subscribe(
          (nav:any)=>{
            this.nav = nav;
          }
        )
      } else {
        // if admin
        this.appServ.changeAdmin().subscribe(
          (nav:any)=>{
            this.nav = nav;
          }
        )
      }
      
    } else {
      // if not login
      this.appServ.changeNotLog().subscribe(
        (nav:any)=>{
          this.nav = nav;
        }
      )
      
    }
    
    let data = localStorage.getItem('token') ? true : false
    this.loged = data;
  
    
  }

  // change localization
  changeLang(){
    if(this.language == "en"){
      this.translate.use("fr")
      this.language = "fr"
    } else {
      this.translate.use("en")
      this.language = "en"
    }
  }

  getLogin(){
    this.appServ.getLogStatus().subscribe(
      (data:any)=>{
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
        this.router.navigate(['/'])
        window.location.href = "/"
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
