import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { FormComponent } from './content/form/form.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    CardComponent,
    HeaderComponent
  ]
})
export class MainModule { }
