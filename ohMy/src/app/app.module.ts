import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MaterialModule } from './material/material.module';
import { HomepageManagementModule } from './homepage-management/homepage-management.module';
import { MenuManagementModule } from './menu-management/menu-management.module';
import { LoginMainComponent } from './login-management/login-main/login-main.component';
import { LoginManagementModule } from './login-management/login-management.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MaterialModule,
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
    HomepageManagementModule,
    MenuManagementModule,
    LoginManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
