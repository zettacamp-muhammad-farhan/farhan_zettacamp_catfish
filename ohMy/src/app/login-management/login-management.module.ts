import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule
  ], 
  exports: [
    LoginMainComponent
  ]
})
export class LoginManagementModule { }
