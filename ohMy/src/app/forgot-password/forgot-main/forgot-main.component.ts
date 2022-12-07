import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotService } from '../forgot.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-forgot-main',
  templateUrl: './forgot-main.component.html',
  styleUrls: ['./forgot-main.component.scss']
})
export class ForgotMainComponent implements OnInit {

  formMenu:any

  constructor(
    private forgot:ForgotService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formMenu = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    })
  }

  onSubmit(){
    const email = this.formMenu.get('email').value
    // console.log(email);
    this.forgot.getUser(email).subscribe(
      (data:any)=>{
        // console.log(data.data.getOneUser.email);
        if(data.data.getOneUser == null){
          Swal.fire({
            icon: 'error',
            title: 'User not found!',
            text: 'Check or register new account',
            footer: '<a href="login/signup">Register</a>'
          })
        } else {
          this.forgot.saveTemp(data.data.getOneUser.email)
          this.router.navigate(['/forgot-pass'])
        }
      }
    )
    
  }

  signUp(){
    this.router.navigate(['/login/signup'])
  }
}
