import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMainComponent } from './cart-main/cart-main.component';
import { CartListComponent } from './cart-main/cart-list/cart-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartMainComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    CartMainComponent, CartListComponent
  ]
})
export class CartManagementModule { }
