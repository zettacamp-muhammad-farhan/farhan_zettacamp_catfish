import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMainComponent } from './cart-main/cart-main.component';
import { CartListComponent } from './cart-main/cart-list/cart-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartUpdateComponent } from './cart-update/cart-update.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CartMainComponent,
    CartListComponent,
    CartUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[
    CartMainComponent, CartListComponent, CartUpdateComponent
  ]
})
export class CartManagementModule { }
