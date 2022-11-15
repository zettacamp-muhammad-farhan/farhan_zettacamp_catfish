import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material/material.module';

const routes : Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"", component:HomepageMainComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomepageMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [HomepageMainComponent]
})
export class HomepageManagementModule { }
