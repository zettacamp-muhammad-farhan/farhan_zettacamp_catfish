import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { UserComponent } from './main/users/user/user.component';
import { UsersComponent } from './main/users/users.component';

const routes: Routes = [
  {path:"", component:UserComponent},
  {path:"users", component:UsersComponent},
  {path:"users/form", component:FormComponent},
  {path:"users/edit/:id", component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
