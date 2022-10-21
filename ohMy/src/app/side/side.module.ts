import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { AddComponent } from './list/add/add.component';
import { UpdateComponent } from './list/update/update.component';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ItemComponent,
    AddComponent,
    UpdateComponent
  ]
})
export class SideModule { }
