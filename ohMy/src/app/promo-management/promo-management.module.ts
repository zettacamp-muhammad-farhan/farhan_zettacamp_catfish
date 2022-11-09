import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import { MaterialModule } from '../material/material.module';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PromoListComponent,
    PromoCardComponent,
    PromoFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PromoCardComponent,
    PromoListComponent,
    PromoFormComponent
  ]
})
export class PromoManagementModule { }
