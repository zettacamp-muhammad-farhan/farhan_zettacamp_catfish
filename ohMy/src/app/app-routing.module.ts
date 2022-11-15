import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './about-management/about-main/about-main.component';
import { LoginMainComponent } from './login-management/login-main/login-main.component';
import { MenuMainComponent } from './menu-management/menu-main/menu-main.component';

const routes: Routes = [
  {
    path:"", 
    loadChildren:()=>import('./homepage-management/homepage-management.module').then(mod=>mod.HomepageManagementModule)
  },
  
  {
    path:"menu", component:MenuMainComponent
  }, 
  {
    path:"login", component:LoginMainComponent
  },
  {
    path:"about", component:AboutMainComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
