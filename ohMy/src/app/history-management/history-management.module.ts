import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryMainComponent } from './history-main/history-main.component';
import { HistoryListComponent } from './history-main/history-list/history-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HistoryMainComponent,
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MaterialModule
  ],
  exports:[
    HistoryListComponent,
    HistoryMainComponent
  ]
})
export class HistoryManagementModule { }
