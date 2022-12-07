import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StockService } from '../stock.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockUpdateComponent } from '../stock-update/stock-update.component';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-stcok-management-main',
  templateUrl: './stcok-management-main.component.html',
  styleUrls: ['./stcok-management-main.component.scss']
})
export class StcokManagementMainComponent implements OnInit {
  // filter name
  filtName = ""

  dataSource = new MatTableDataSource([])
  displayedColumns:string[] = ['name', 'stock', 'action']

  @ViewChild('paginator') paginator!: MatPaginator;
  length = 10
  pageSizeOptions: number[] = [10, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 10
  }

  subs = new SubSink();

  stock:any;

  filterName:any

  loaded=false

  constructor(
    private stockServ : StockService,
    private dialog : MatDialog,
    private translate : TranslateService
  ) { }

  ngOnInit(): void {
    this.getData()

    this.filterName = new FormGroup({
      name: new FormControl(null)
    })

    this.filterName.get('name').valueChanges.subscribe(
      (data:any)=>{
        if(data){
          const name = data;
          this.filtName = name
          this.stockServ.getIngridients({limit:10, page:0}, this.filtName).subscribe(
            (data:any) => {
              this.dataSource = data.data.getAllIngredients.data;
              // console.log(this.dataSource);

              this.stockServ.getIngridients({page:0, limit:1000}, this.filtName).subscribe(
                (length:any)=>{
                  
                  this.paginator.length = length.data.getAllIngredients.countResult
                  this.paginator.pageSize = this.pageSizeOptions[0];
                }
              )
              
            }
          )
        } else{
          this.stockServ.getIngridients({page:0, limit: 100}, "").subscribe(
            (data:any) => {
              if(data){
                this.loaded = true
                // console.log(this.loaded);
                

                this.dataSource = data.data.getAllIngredients.data;
  
                this.paginator.length = 100
                this.paginator.pageSize = this.pageSizeOptions[0];
              }
            }
          )
          
        }
      }
      
    )
  }

  getData(){
    this.subs.sink = this.stockServ
    .getIngridients(this.pagination, this.filtName)
    .subscribe(
      (data:any) => {
        if(data){
          this.loaded = true
        }
        // console.log(data.data.getAllIngredients.TotalDocument);

        // set paginator
        this.paginator.length = data.data.getAllIngredients.TotalDocument
        this.paginator.pageSize = this.pageSizeOptions[0];
        
        this.dataSource = data.data.getAllIngredients.data;
      }
    )
  }


  onPaginatorChange(event:PageEvent){
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;
    // refetch data
    this.getData()
  }

  openDialog(){
    const dialogRef = this.dialog.open(StockFormComponent, {
      width: "30%",
      data: {
        "nama" : "siapa"
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        if(res){
          this.stockServ
          .getIngridients(this.pagination, this.filtName)
          .subscribe(
            (data:any) => {
              this.dataSource = data.data.getAllIngredients.data;
            }
          )
        }
      }
    )
  }

  openDell(id:any){
    let status = 'deleted'
    let data = {id}
    Swal.fire({
      title: this.translate.instant('Are you sure?'),
      text: this.translate.instant("You won't be able to revert this!"),
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: this.translate.instant('Cancel') ,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('Yes, delete it!')
    }).then((result) => {
      if (result.isConfirmed) {
        this.stockServ.deleteIngirdient(data).subscribe(
          ({data})=>{
            Swal.fire({
              position:'center',
              icon: 'success',
              title : 'Success Delete data',
              confirmButtonText : 'okay'
            })
            this.getData()
            
          }, error => {
            Swal.fire({
              position:'center',
              icon: 'error',
              title : error,
              confirmButtonText : 'okay'
            })
          }
        )
      }
    })
    
  }

  updateData(id:string, name:string, stock:any){
    const dialogRef = this.dialog.open(StockUpdateComponent, {
      width: "30%",
      data:{
        id : id,
        name: name,
        stock: stock
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        this.stockServ
        .getIngridients(this.pagination, this.filtName)
        .subscribe(
          (data:any) => {
            this.dataSource = data.data.getAllIngredients.data;
          }
        )
      }
    )
  }

}
