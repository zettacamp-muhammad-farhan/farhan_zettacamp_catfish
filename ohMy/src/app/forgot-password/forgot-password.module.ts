import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotMainComponent } from './forgot-main/forgot-main.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ForgotMainComponent,
    ForgotPassComponent
  ],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, TranslateModule
  ], 
  exports:[
    ForgotMainComponent,
    ForgotPassComponent
  ]
})
export class ForgotPasswordModule { }
