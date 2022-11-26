import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MenuCardComponent } from './menu-main/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MenuCardComponent,
    MenuAddComponent
  ],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, MatProgressSpinnerModule
  ],
  exports:[
    MenuMainComponent, MenuCardComponent, MenuAddComponent
  ]
})
export class MenuManagementModule { }
