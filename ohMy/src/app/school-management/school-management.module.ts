import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolListComponent } from './school-list/school-list.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    SchoolListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SchoolListComponent
  ]
})
export class SchoolManagementModule { }
