import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSchoolComponent } from './list-school/list-school.component';
import { GraphQLModule } from '../graphql.module';



@NgModule({
  declarations: [
    ListSchoolComponent
  ],
  imports: [
    CommonModule, GraphQLModule
  ],
  exports: [
    ListSchoolComponent
  ]
})
export class MainModule { }
