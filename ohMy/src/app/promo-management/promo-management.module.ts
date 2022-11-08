import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PromoListComponent,
    PromoCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PromoCardComponent,
    PromoListComponent
  ]
})
export class PromoManagementModule { }
