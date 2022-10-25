import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book:{
    name:string,
    img:string,
    author:string,
    publisher:string,
    publishDate:string
  } = {
    name:"",
    img:"",
    author:"",
    publisher:"",
    publishDate:""
  }

  constructor(
    private bookData:BookManagementService
  ) { }

  ngOnInit() {
    this.bookData.getSelectedBook().subscribe(
      val=>{
        // console.log(val)
        this.book.name = val.name
        this.book.img = val.img
        this.book.author = val.author
        this.book.publisher = val.publisher
        this.book.publishDate = val.publishDate
      }

    )
  console.log(this.book)

  }



}
