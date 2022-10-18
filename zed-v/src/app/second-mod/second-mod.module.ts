import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagleComponent } from './eagle/eagle.component';
import { LionComponent } from './lion/lion.component';
import { ElephantComponent } from './elephant/elephant.component';



@NgModule({
  declarations: [
    EagleComponent,
    LionComponent,
    ElephantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EagleComponent,
    LionComponent,
    ElephantComponent
  ]
})
export class SecondModModule { }
