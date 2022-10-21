import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { FormComponent } from './content/form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FieldComponent } from './content/field/field.component';



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    FieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    FieldComponent
  ]
})
export class MainModule { }
