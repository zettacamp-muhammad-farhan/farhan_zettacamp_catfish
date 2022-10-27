import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FormComponent } from './form/form.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    FormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    UsersComponent,
    UserComponent,
    FormComponent,
    UserDetailComponent
  ]
})
export class MainModule { }
