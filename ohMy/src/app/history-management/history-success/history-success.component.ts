import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HistoryService } from '../history.service';

import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-history-success',
  templateUrl: './history-success.component.html',
  styleUrls: ['./history-success.component.scss']
})
export class HistorySuccessComponent implements OnInit {

  loaded = false

  dataSource = new MatTableDataSource([])
  displayedColumns:string[] = ['id', 'email', 'fnd', 'total_amount', 'order_date', 'total_price']

  @ViewChild('paginator') paginator!: MatPaginator
  length = 10
  pageSizeOptions: number[] = [10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 10
  }

  subs = new SubSink();
  history:any

  dataIncome:any = {balance:777, count:"XXX", sold:"XXX"}

  constructor(
    private historyServ : HistoryService,
  ) { }

  ngOnInit(): void {
    this.getData()
    this.getIncome()
  }

  getIncome(){
    this.subs.sink = this.historyServ.getIncome().subscribe(
      (data:any)=>{
        this.dataIncome = data.data.getIncome
        console.log(this.dataIncome);
        
      }
    )
  }

  getData(){
    this.subs.sink = this.historyServ.getHistoryAd(this.pagination).valueChanges.subscribe(
      (data:any)=>{
        if(data){
          this.loaded = true
        }
        // console.log(data.data.getSuccessTransactions);
        let res = data.data.getSuccessTransactions
        
        this.dataSource = res;
        const length = res[0].count;
        this.paginator.length = length
        this.paginator.pageSize = 10
      }
    )
  }

  onPaginatorChange(event:PageEvent){
    this.pagination.limit = event.pageSize
    this.pagination.page = event.pageIndex
    this.getData()
  }

}
