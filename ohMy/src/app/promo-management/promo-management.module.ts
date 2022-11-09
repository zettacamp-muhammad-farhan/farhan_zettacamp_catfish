import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoListComponent } from './promo-list/promo-list.component';
import { CardListComponent } from './promo-list/card-list/card-list.component';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PromoListComponent,
    CardListComponent,
    PromoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule
  ],
  exports:[PromoFormComponent, PromoListComponent, CardListComponent]
})
export class PromoManagementModule { }
