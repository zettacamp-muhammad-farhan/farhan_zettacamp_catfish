import { Component } from '@angular/core';
import { LoginService } from './login-management/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohMy';

  loged!:boolean|null

  constructor(
    private login:LoginService
  ) { }

  ngOnInit(){
    let data = localStorage.getItem('token') ? true : false
    this.loged = data
    console.log(this.loged);
  }

  logOut(){
    let data = localStorage.getItem('token') ? true : false
    this.loged = data
    console.log(this.loged);
    this.login.logOut()
  }
}
