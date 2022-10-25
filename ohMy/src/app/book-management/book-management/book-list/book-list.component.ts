import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:{}[] =[]

  constructor(
    private dataBook:BookManagementService
  ) { }

  ngOnInit() {
    this.books = this.dataBook.books

    console.log(this.dataBook.getBooks().subscribe(
      p=>{
        console.log(p);
        
      }
    ))
  }

}
