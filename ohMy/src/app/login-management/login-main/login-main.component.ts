import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { LoginService } from '../login.service';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  private subs = new SubSink()

  loginForm:FormGroup = this.initFormGroup()


  constructor(
    private fb : FormBuilder,
    private loginServ:LoginService,
    private router:Router,
    public appComp:AppComponent
  ) { }

  ngOnInit(): void {
  }

  initFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    this.appComp.logIn()

    const payload = this.loginForm.value
    console.log(payload);
    
    this.subs.sink = this.loginServ.loginUser(payload).subscribe((resp:any)=>{
      if(resp){
        // this.router.navigate(['/']);
        this.appComp.logIn()
      }
    })
  }

}
