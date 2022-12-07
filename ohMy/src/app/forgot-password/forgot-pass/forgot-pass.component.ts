import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotService } from '../forgot.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  formMenu:any

  showPass = false

  constructor(
    private forgot:ForgotService,
    private router:Router
  ) { }

  ngOnInit(): void {

    let emaill = ""
    this.forgot.getTemp().subscribe(
      (email:string)=>{
        if(email == ""){
          // this.router.navigate(['/forgot'])
        } else {
          emaill = email
          console.log(emaill);
        }
        
      }
    )

    this.formMenu = new FormGroup({
      email: new FormControl(emaill, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    const result = this.formMenu.value
    this.forgot.changePass(result).subscribe(
      data=>{
        console.log(data);
        Swal.fire(
          'Good job!',
          'Success to reset Password',
          'success'
        )
        
      }, err => {
        Swal.fire(
          'Good job!',
          'fail reset password',
          'error'
        )
      }
    )
    
  }

  show(){
    if(this.showPass){
      this.showPass = false
    } else {
      this.showPass = true
    }
  }

}
