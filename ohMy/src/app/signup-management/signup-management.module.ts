import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupMainComponent } from './signup-main/signup-main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SignupMainComponent
  ]
})
export class SignupManagementModule { }
