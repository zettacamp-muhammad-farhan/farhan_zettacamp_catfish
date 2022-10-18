import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './apple/apple.component';
import { OrangeComponent } from './orange/orange.component';
import { BananaComponent } from './banana/banana.component';



@NgModule({
  declarations: [
    AppleComponent,
    OrangeComponent,
    BananaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppleComponent,
    OrangeComponent,
    BananaComponent
  ]
})
export class FirstModModule { }
