import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StcokManagementMainComponent } from './stcok-management-main/stcok-management-main.component';
import { MaterialModule } from '../material/material.module';
import { StockFormComponent } from './stock-form/stock-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    StcokManagementMainComponent,
    StockFormComponent,
    StockUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  exports: [
    StcokManagementMainComponent, StockFormComponent, StockUpdateComponent
  ]
})
export class StockManagementManagementModule { }
