import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuManService } from '../menu-man.service';

import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { MenuFormComponent } from '../menu-form/menu-form.component';
import Swal from 'sweetalert2';
import { MenuUpdateComponent } from '../menu-update/menu-update.component';
import { MenuService } from 'src/app/menu-management/menu.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HomepageService } from 'src/app/homepage-management/homepage.service';


@Component({
  selector: 'app-menu-management-main',
  templateUrl: './menu-management-main.component.html',
  styleUrls: ['./menu-management-main.component.scss']
})
export class MenuManagementMainComponent implements OnInit {

  loaded=false

  // for filter
  filterName:any = ""
  filterStatus:any = null

  dataSource = new MatTableDataSource([])
  displayedColumns:string[] = ['image','name', 'ingredients', 'price', 'available', 'specialOffer', 'highlight', 'status', 'action']

  @ViewChild('paginator') paginator!: MatPaginator;
  length = 5
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 5
  }

  subs = new SubSink();

  status = [null, "active", "deleted", "draft"]

  recipes:any

  findName:any
  constructor(
    private menuServ : MenuManService,
    private menu:MenuService,
    private dialog:MatDialog,
    private home:HomepageService
  ) { }

  ngOnInit(): void {
    this.getData();

    this.findName = new FormGroup({
      name: new FormControl(null),
      status:new FormControl(null)
    })
    
    this.findName.valueChanges.subscribe(
      (data:any)=>{
        if(data){
          // console.log(data.name);
          let name = ""
          let status:any = ""
          if(data.name){
            name = data.name
          } else {
            name = ""
          }
          if(data.status){
            status = data.status;
          } else {
            status = null
          }

          this.filterName = name
          this.filterStatus = status
          this.menuServ.getRecipes({page:0, limit:5}, this.filterName, this.filterStatus).subscribe(
            
            (data:any) => {
              this.dataSource = data;
              
              // get length data after filter
              this.menuServ.getRecipes({limit:1000, page:0}, this.filterName, this.filterStatus).subscribe(
                (data:any)=>{
                  const length = data[0].count_result;
                  this.paginator.length = length;
                  this.paginator.pageSize = this.pageSizeOptions[0];
                }
              )

            }
          )
          
        } 
      }
    )
  }

  getData(){
    this.subs.sink = this.menuServ
    .getRecipes(this.pagination, this.filterName, this.filterStatus)
    .subscribe(
      (data:any) => {
        if(data){
          this.loaded = true
        }
        this.dataSource = data;
        // console.log(data[0].total_count);
        const length = data[0].total_count
        this.paginator.length = length;
        this.paginator.pageSize = this.pageSizeOptions[0]; // 5
      }
    )
  }

  onPaginatorChange(event: PageEvent) {
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;
    // refetch data
    this.getData()
  } 



  openDialog(){
    const dialogRef = this.dialog.open(MenuFormComponent, {
      width:"50%",
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
    // console.log(ingredient);
    
    const dialogRef = this.dialog.open(MenuUpdateComponent, {
      width:"50%",
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
        // console.log(res);
        this.getData()
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

  updateStatus(input:any){
    this.menuServ.updateStatus(input).subscribe(
      (res:any)=>{
        if(res){
          this.getData();
          this.menu.getRecipes({limit:5, page:0})
        } 
      }, (error:any)=>{
        Swal.fire(
          "you can't unpublished because this food in cart",
          'You clicked the button!',
          'error'
        )
        
      }
    )
  }

  updateSpecial(input:any){
    this.menuServ.updateSpecial(input).subscribe(
      (res:any)=>{
        if(res){
          this.getData()
          // homepage
          this.home.getRecipesSpecial({limit:5, page:0})
        }
      }, (error:any)=>{
        Swal.fire(
          "you can't set because this food in cart",
          'You clicked the button!',
          'error'
        )
      }
    )
  }

  updateHightlight(input:any){
    this,this.menuServ.updateHightlight(input).subscribe(
      (res:any)=>{
        if(res){
          this.getData()
          this.home.getRecipesHighlight({limit:5, page:0})
        }
      }, (error:any)=>{
        Swal.fire(
          "you can't set because this food in cart",
          'You clicked the button!',
          'error'
        )
      }
    )
  }

}
