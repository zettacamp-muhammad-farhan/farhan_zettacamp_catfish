import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MenuService } from '../menu.service';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from '../menu-add/menu-add.component';
@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {

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
    private menuServ : MenuService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.subs.sink = this.menuServ
    .getRecipes(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        this.recipes = data.data.getAllRecipes;
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
    this.refetchData();
    this.getData()
  } 

  refetchData() {
    const pagination = this.pagination;
    this.menuServ.getRecipes(pagination).refetch();
  }

  openDialog(){
    const dialogRef = this.dialog.open(MenuAddComponent, {
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

}
