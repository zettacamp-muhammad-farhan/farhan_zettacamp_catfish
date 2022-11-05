import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
