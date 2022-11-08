import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoListComponent } from './promo-management/promo-list/promo-list.component';
import { SchoolListComponent } from './school-management/school-list/school-list.component';
import { UserListComponent } from './user-management/user-list/user-list.component';

const routes: Routes = [
  {path:"", component:PromoListComponent},
  {path:"school", component:SchoolListComponent},
  {path:"users", component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
