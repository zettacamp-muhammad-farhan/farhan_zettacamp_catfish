import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AppComponent } from '../../app.component'
import Swal from 'sweetalert2';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup-main',
  templateUrl: './signup-main.component.html',
  styleUrls: ['./signup-main.component.scss']
})
export class SignupMainComponent implements OnInit {

  private subs = new SubSink()

  signUp:FormGroup = this.initFormGroup()

  showPass = false

  constructor(
    private fb : FormBuilder,
    private signupServ:SignupService,
    private router:Router
  ) { 
    
   }

  ngOnInit(): void {
    
  }

  initFormGroup(){
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(){
    const payload = this.signUp.value
    payload.role = "user"
    console.log(payload);

    this.subs.sink = this.signupServ.signUp(payload).subscribe(
      data=>{
        // console.log(data);
        Swal.fire({
          title: 'Congratulation you success to make account',
          text: "Do you want go to login page ?",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'go to login page'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login'])
          }
        })
        
      }, err=>{
        Swal.fire(
          'Oh Nooo',
          'Email already use on other account, please check again',
          'error'
        )
      }
    )
    
  }

  login(){
    this.router.navigate(['/login'])
  }

  show(){
    if(this.showPass){
      this.showPass = false
    } else {
      this.showPass = true
    }
  }


}
