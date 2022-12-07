import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupMainComponent } from './signup-main/signup-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SignupMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ],
  exports:[
    SignupMainComponent
  ]
})
export class SignupManagementModule { }
