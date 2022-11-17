import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuManService } from '../menu-man.service';

import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { MenuFormComponent } from '../menu-form/menu-form.component';
import Swal from 'sweetalert2';
import { MenuUpdateComponent } from '../menu-update/menu-update.component';


@Component({
  selector: 'app-menu-management-main',
  templateUrl: './menu-management-main.component.html',
  styleUrls: ['./menu-management-main.component.scss']
})
export class MenuManagementMainComponent implements OnInit {

  dataSource = new MatTableDataSource([])
  displayedColumns:string[] = ['image','name', 'ingredients', 'price', 'available', 'status', 'action']

  @ViewChild('paginator') paginator!: MatPaginator;
  length = 5
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 5
  }

  subs = new SubSink();

  recipes:any

  constructor(
    private menuServ : MenuManService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.subs.sink = this.menuServ
    .getRecipes(this.pagination)
    .subscribe(
      (data:any) => {
        this.dataSource = data;
        console.log(this.recipes);
      }
    )
    this.initPaginator()
  }

  initPaginator() {
    this.menuServ
      .getRecipesLenght()
      .subscribe((length: number) => {
            // update paginator length
            this.paginator.length = length;
            this.paginator.pageSize = this.pageSizeOptions[0]; // 5
      });
  }

  onPaginatorChange(event: PageEvent) {
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;
    // refetch data
    this.getData()
  } 



  openDialog(){
    const dialogRef = this.dialog.open(MenuFormComponent, {
      width:"70%",
      data: {
        hola:"test"
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        if(res){
          this.getData()
        }
        
      }
    )
  }

  openEdit(id:string, name:string, price:string, image:string, ingredient:any){
    console.log(ingredient);
    
    const dialogRef = this.dialog.open(MenuUpdateComponent, {
      width:"70%",
      data:{
        id:id,
        name:name,
        price:price,
        image:image,
        ingredient:ingredient
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        console.log(res);
        
      }
    )
  }

  deleteRecipe(val:any){
    const data = {id:val}
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuServ.deleteRecipe(data)
        .subscribe(
          (data:any)=>{
            Swal.fire({
              position:'center',
              icon: 'success',
              title : 'Success Delete data',
              confirmButtonText : 'okay'
            }).then(()=>{
              this.getData()
            })
          }
        )
      }
    })
    

  }

}
