import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
