import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupMainComponent } from './signup-main/signup-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SignupMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    SignupMainComponent
  ]
})
export class SignupManagementModule { }
