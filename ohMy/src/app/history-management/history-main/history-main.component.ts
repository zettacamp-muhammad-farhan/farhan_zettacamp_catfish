import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import Swal from 'sweetalert2';
import { HistoryService } from '../history.service';



@Component({
  selector: 'app-history-main',
  templateUrl: './history-main.component.html',
  styleUrls: ['./history-main.component.scss']
})
export class HistoryMainComponent implements OnInit {

  loaded = false

  subs = new SubSink
  orderSuccess:any
  orderFailed:any

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorFail') paginatorFail!: MatPaginator;
  lengthSuccess=5
  paginationSuccess:any = {
    page:0,
    limit:5
  }
  paginationFail:any = {
    page:0,
    limit:5
  }

  constructor(
    private history:HistoryService
  ) { }

  ngOnInit(): void {
    this.getHistorySuccess()

    this.getHistoryFail()
  }


  getHistorySuccess(){
    this.subs.sink = this.history
    .getHistory(this.paginationSuccess,"success").valueChanges.subscribe(
      (data:any)=>{
        if(data){
          this.loaded = true
        }

        this.orderSuccess = data.data.getAllTransactions;
        console.log(data.data.getAllTransactions);

        const length = data.data.getAllTransactions[0].total_docs
        this.paginator.length = length
        this.paginator.pageSize = 5
        
      }
    )

  }
  getHistoryFail(){
    this.subs.sink = this.history
    .getHistory(this.paginationFail,"failed").valueChanges.subscribe(
      (data:any)=>{
        if(data){
          this.loaded = true
        }

        this.orderFailed = data.data.getAllTransactions;
        console.log(data.data.getAllTransactions);

        const length = data.data.getAllTransactions[0].total_docs
        this.paginatorFail.length = length
        this.paginatorFail.pageSize = 5
        
      }
    )
  }

  onPaginatorChange(event: PageEvent) {
    this.paginationSuccess.limit = event.pageSize;
    this.paginationSuccess.page = event.pageIndex;
    // refetch data
    this.getHistorySuccess()
  } 
  onPaginatorChangeFail(event: PageEvent) {
    this.paginationFail.limit = event.pageSize;
    this.paginationFail.page = event.pageIndex;
    // refetch data
    this.getHistoryFail()
  } 

}
