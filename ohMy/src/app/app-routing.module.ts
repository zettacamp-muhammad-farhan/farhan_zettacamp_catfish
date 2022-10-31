import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { HomeComponent } from './main/home/home.component';
import { UserComponent } from './main/users/user/user.component';
import { UsersComponent } from './main/users/users.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"users/form", component:FormComponent},
  {path:"users/edit", component:FormComponent},
  // {path:"users/edit", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
