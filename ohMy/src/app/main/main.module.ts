import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { ListComponent } from './content/list/list.component';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from './content/section/section.component'



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    ListComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule
  ],
  exports: [
    ContentComponent,
    CardComponent,
    ListComponent
  ]
})
export class MainModule { }
