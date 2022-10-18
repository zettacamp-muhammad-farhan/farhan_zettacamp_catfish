import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModModule } from './first-mod/first-mod.module';
import { SecondModModule } from './second-mod/second-mod.module';
import { ThirdModModule } from './third-mod/third-mod.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModModule,
    SecondModModule,
    ThirdModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
