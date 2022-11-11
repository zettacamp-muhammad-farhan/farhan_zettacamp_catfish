import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PromoFormComponent } from './promo-list/promo-form/promo-form.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserTestComponent } from './user-test/user-test.component';

const routes : Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"promo", component:PromoListComponent
      },
      {
        path:"user", component:UserTestComponent
      }
    ]
  }
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PromoListComponent,
    PromoCardComponent,
    PromoFormComponent,
    UserTestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
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
    RouterModule.forChild(routes),
  ],
  exports:[
    PromoListComponent,
    PromoListComponent,
    PromoFormComponent,
    UserTestComponent
  ]
})
export class PromoManagementModule { }
