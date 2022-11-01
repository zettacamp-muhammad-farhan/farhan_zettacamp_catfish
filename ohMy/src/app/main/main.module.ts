import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';


import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';import { AppRoutingModule } from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';
import { CustCharPipe } from './cust-char.pipe';
import { FilterPipe } from './filter.pipe';
import { remove } from  "remove-accents";
import { ShorterPipe } from './shorter.pipe';


export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    FormComponent,
    UserDetailComponent,
    HomeComponent,
    CustCharPipe,
    FilterPipe,
    ShorterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
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
    
  ],
  exports:[
    UsersComponent,
    UserComponent,
    FormComponent,
    UserDetailComponent,
    HomeComponent
  ]
})
export class MainModule { }
