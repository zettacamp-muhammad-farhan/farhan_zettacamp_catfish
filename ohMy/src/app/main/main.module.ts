import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { FormAddComponent } from './form-add/form-add.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { GetDataComponent } from './get-data/get-data.component';



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    FormAddComponent,
    GetDataComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    ContentComponent,
    CardComponent,
    FormAddComponent,
    GetDataComponent
  ]
})
export class MainModule { }
