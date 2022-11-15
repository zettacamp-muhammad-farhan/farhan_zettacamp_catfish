import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  loginForm:FormGroup = this.initFormGroup()

  constructor(
    private fb : FormBuilder
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
    
  }

}
