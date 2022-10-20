import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    CardComponent
  ]
})
export class MainModule { }
