import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule
  ], 
  exports: [
    LoginMainComponent
  ]
})
export class LoginManagementModule { }
