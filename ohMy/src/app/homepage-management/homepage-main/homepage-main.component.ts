import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepageService } from '../homepage.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { SubSink } from 'subsink';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


//open dialog
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from 'src/app/menu-management/menu-add/menu-add.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss']
})
export class HomepageMainComponent implements OnInit {

  loaded = false
  
  @ViewChild('paginator') paginator!: MatPaginator;
  length = 6
  pageSizeOptions:number[] = [6]
  pagination = {
    page:0, limit:6
  }

  subs = new SubSink()
  subsSp = new SubSink()
  recipesHighlight:any
  specialOffer:any = [{}]

  // big display homepage, will take index 0 if available > 0, and will next index if available = 0 / sold
  menuBig:any

  canBuy = false

  // waiting image load
  imgWait = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"

  constructor(
    private homeServ:HomepageService, 
    private router:Router,
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user') ? true : false
    this.canBuy = user

    this.getSpecialOver() 
    this.getRecipesHigh()

    // console.log(this.specialOffer);
    
    // for(let i = 0; i < this.specialOffer.length; i++){
    //   if(this.specialOffer[i].available > 0){
    //     this.menuBig = this.specialOffer[i]
    //     break
    //   }
    // }

    // console.log(this.menuBig);
    // console.log('atest');
    

  }

  getRecipesHigh(){
    
    this.subs.sink = this.homeServ.getRecipesHighlight(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        
        if(data){
          this.loaded = true
        }
        this.recipesHighlight = data.data.getAllRecipes
      }
    )
  }

  getSpecialOver(){
    this.subsSp.sink = this.homeServ.getRecipesSpecial(this.pagination)
    .valueChanges.subscribe(
      (data:any)=>{
        if(data){
          this.loaded = true
        }
        // console.log(data.data.getAllRecipes.length);
        this.specialOffer = data.data.getAllRecipes
      }
    )

  }

  linkMenu(){
    this.router.navigate(['/menu'])
  }

  openDialog(id:any, available:any){
    console.log(available);
    if(available == 0){
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("Oops, menus are up"),
        text: this.translate.instant('Sorry, menus are up, please choose other food'),
        footer: '<a href="/menu">this.traslate.instant("find another food")</a>'
      })
    }
    
    if(this.canBuy){
      const dialogRef = this.dialog.open(MenuAddComponent, {
        width:"30%",
        data:{
          id:id
        }
      })
      dialogRef.afterClosed().subscribe(
        res=>{
          this.homeServ.getRecipesHighlight({limit:5, page:0}).refetch()
          this.homeServ.getRecipesSpecial({limit:5, page:0}).refetch()
        }
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('Oops'),
        text: this.translate.instant('You must login before order!!'),
        footer: '<a href="/login">Login</a>'
      })
    }

  }


}
