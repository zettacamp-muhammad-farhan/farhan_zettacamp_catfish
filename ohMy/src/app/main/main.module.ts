import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ]
})
export class MainModule { }
