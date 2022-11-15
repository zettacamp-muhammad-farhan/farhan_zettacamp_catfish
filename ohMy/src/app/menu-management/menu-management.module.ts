import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MenuCardComponent } from './menu-main/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';

const routes : Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"menu", component:MenuMainComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MenuMainComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports:[
    MenuMainComponent, MenuCardComponent
  ]
})
export class MenuManagementModule { }
