import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrotComponent } from './carrot/carrot.component';
import { CabbageComponent } from './cabbage/cabbage.component';
import { SpinachComponent } from './spinach/spinach.component';



@NgModule({
  declarations: [
    CarrotComponent,
    CabbageComponent,
    SpinachComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarrotComponent,
    CabbageComponent,
    SpinachComponent
  ]
})
export class ThirdModModule { }
