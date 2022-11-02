import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts:any
  constructor(
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    let data =  this.data.getData().subscribe(
      data=>{
        this.posts = data
      }
    )
  }

  addData(){
    // this.data.addData()
  }


}
