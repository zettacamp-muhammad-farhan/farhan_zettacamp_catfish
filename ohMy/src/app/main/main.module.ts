import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDataComponent } from './list-data/list-data.component';
import { CardComponent } from './list-data/card/card.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import { DatePipe } from '@angular/common'

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  providers:[
    DatePipe
  ],
  declarations: [
    ListDataComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    MatCardModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatRadioModule, MatButtonModule,MatDialogModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    TranslateModule
  ],
  exports:[
    ListDataComponent,
    CardComponent,
    FormComponent
  ]
})
export class MainModule { }
