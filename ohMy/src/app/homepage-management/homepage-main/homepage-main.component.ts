import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepageService } from '../homepage.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { SubSink } from 'subsink';
import { Route, Router } from '@angular/router';
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
  specialOffer:any

  constructor(
    private homeServ:HomepageService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRecipesHigh()
    this.getSpecialOver() 
  }

  getRecipesHigh(){
    this.subs.sink = this.homeServ.getRecipesHighlight(this.pagination)
    .valueChanges.subscribe(
      (data:any) => {
        if(data){
          this.loaded = true
        }
        this.recipesHighlight = data.data.getAllRecipes
        console.log(data.data.getAllRecipes);
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
        console.log(data.data.getAllRecipes);
        this.specialOffer = data.data.getAllRecipes
      }
    )

  }

  linkMenu(){
    this.router.navigate(['/menu'])
  }


}
