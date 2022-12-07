import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryMainComponent } from './history-main/history-main.component';
import { HistoryListComponent } from './history-main/history-list/history-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialModule } from '../material/material.module';
import { HistorySuccessComponent } from './history-success/history-success.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HistoryMainComponent,
    HistoryListComponent,
    HistorySuccessComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MaterialModule,
    TranslateModule
  ],
  exports:[
    HistoryListComponent,
    HistoryMainComponent,
    HistorySuccessComponent
  ]
})
export class HistoryManagementModule { }
