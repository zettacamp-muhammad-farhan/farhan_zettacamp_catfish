import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './about-management/about-main/about-main.component';
import { AuthenticationGuard } from './authentication.guard';
import { CartMainComponent } from './cart-management/cart-main/cart-main.component';
import { LoginMainComponent } from './login-management/login-main/login-main.component';
import { MenuManagementMainComponent } from './menu-management-management/menu-management-main/menu-management-main.component';
import { MenuMainComponent } from './menu-management/menu-main/menu-main.component';
import { StcokManagementMainComponent } from './stock-management-management/stcok-management-main/stcok-management-main.component';
import { StockManagementManagementModule } from './stock-management-management/stock-management-management.module';

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
  },
  {
    path:"cart", component:CartMainComponent
  },
  {
    path:"menu-management", component:MenuManagementMainComponent
  },
  {
    path:"stock-management", component:StcokManagementMainComponent, canActivate:[AuthenticationGuard]
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
