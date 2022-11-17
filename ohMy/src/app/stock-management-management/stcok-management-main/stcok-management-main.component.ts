import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StockService } from '../stock.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockUpdateComponent } from '../stock-update/stock-update.component';

@Component({
  selector: 'app-stcok-management-main',
  templateUrl: './stcok-management-main.component.html',
  styleUrls: ['./stcok-management-main.component.scss']
})
export class StcokManagementMainComponent implements OnInit {

  dataSource = new MatTableDataSource([])
  displayedColumns:string[] = ['name', 'stock', 'status', 'action']

  @ViewChild('paginator') paginator!: MatPaginator;
  length = 5
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 5
  }

  subs = new SubSink();

  stock:any

  constructor(
    private stockServ : StockService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.subs.sink = this.stockServ
    .getIngridients(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        this.dataSource = data.data.getAllIngredients;
        console.log(this.dataSource);
        
      }
    )
    this.initPaginator()
  }

  initPaginator(){
    this.stockServ.getIngridientsLenght()
    .subscribe((length:number) => {
      console.log(length);
      
      this.paginator.length = length;
      this.paginator.pageSize = this.pageSizeOptions[0];
    } )
  }

  onPaginatorChange(event:PageEvent){
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;
    // refetch data
    this.refetchData();
    this.getData()
  }

  refetchData() {
    const pagination = this.pagination;
    this.stockServ.getIngridients(pagination).refetch();
  }

  openDialog(){
    const dialogRef = this.dialog.open(StockFormComponent, {
      width: "70%",
      data: {
        "nama" : "siapa"
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        console.log(res);
      }
    )
  }

  openDell(id:any){
    let status = 'deleted'
    let data = {id}
    this.stockServ.deleteIngirdient(data)
  }

  updateData(id:string, name:string, stock:any){
    const dialogRef = this.dialog.open(StockUpdateComponent, {
      width: "70%",
      data:{
        id : id,
        name: name,
        stock: stock
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        console.log(res);
        
      }
    )

    // newStock = parseInt(newStock)
    // let data = {newStock, id}
    // this.stockServ.updateIngirdient(data)
  }

}
