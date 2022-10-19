import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    CardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    ContentComponent
  ]
})
export class BodyModule { }
