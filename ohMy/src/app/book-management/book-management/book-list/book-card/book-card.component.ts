import { Component, Input, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book:any

  constructor(
    private bookData:BookManagementService
  ) { }

  ngOnInit() {
    // this.bookData.getSelectedBook().subscribe(
    //   f=>{
    //     console.log(f);
        
    //   }
    // )
  }

  select(){
    this.bookData.selectedBook({img:this.book.img,name:this.book.name, author:this.book.author, publisher:this.book.publisher, publishDate:this.book.publishDate});
  }



}
