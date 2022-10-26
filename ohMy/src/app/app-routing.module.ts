import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { UserDetailComponent } from './main/users/user-detail/user-detail.component';
import { UsersComponent } from './main/users/users.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"user", component:UsersComponent},
  {path:"user/:id", component:UserDetailComponent},
  {path:"**", redirectTo:"user"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
