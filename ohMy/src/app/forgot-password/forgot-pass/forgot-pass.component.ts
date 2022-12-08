import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotService } from '../forgot.service';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    private router:Router,
    private translate:TranslateService
  ) { }

  ngOnInit(): void {

    let emaill = ""
    this.forgot.getTemp().subscribe(
      (email:string)=>{
        if(email == ""){
          this.router.navigate(['/forgot'])
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
    const res = this.formMenu.value

    Swal.fire({
      title: this.translate.instant('Are you sure to reset password with curent password?'),
      text: this.translate.instant("Your password will reset to new password"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("Yes, Reset!"),
      cancelButtonText: this.translate.instant("No")
    }).then((result) => {
      if (result.isConfirmed) {
        this.forgot.changePass(res).subscribe(
          data=>{
            console.log(data);
            this.router.navigate(['/login'])
            Swal.fire(
              this.translate.instant("Good job!"),
              this.translate.instant("Success to reset Password"),
              'success'
            )
            
          }, err => {
            Swal.fire(
              this.translate.instant("Oh No"),
              this.translate.instant("fail reset password !"),
              'error'
            )
          }
        )
      }
    })


    
  }

  show(){
    if(this.showPass){
      this.showPass = false
    } else {
      this.showPass = true
    }
  }

}
