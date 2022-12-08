import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopupWalletComponent } from './topup-wallet/topup-wallet.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TopupWalletComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule
  ], 
  exports :[
    TopupWalletComponent
  ]
})
export class TopupModule { }
