import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryMainComponent } from './history-main/history-main.component';
import { HistoryListComponent } from './history-main/history-list/history-list.component';



@NgModule({
  declarations: [
    HistoryMainComponent,
    HistoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HistoryManagementModule { }
