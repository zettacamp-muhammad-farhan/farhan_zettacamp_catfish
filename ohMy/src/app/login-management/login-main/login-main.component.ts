import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { LoginService } from '../login.service';
import { AppComponent } from '../../app.component'
import Swal from 'sweetalert2';

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
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  initFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    const payload = this.loginForm.value
    console.log(payload);
    this.subs.sink = this.loginServ.loginUser(payload).subscribe((resp:any)=>{
      if(resp){
        console.log(resp);
        
        this.router.navigate(['/']);
        window.location.href = "/"
        Swal.fire({
          icon: 'success',
          title: 'Horray...',
          text: `now you're loged as ${payload.email}`
        })
      }
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your email or password wrong, please check again'
      })
      
    })
  }

}
