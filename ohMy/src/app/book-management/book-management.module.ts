import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookListComponent } from './book-management/book-list/book-list.component';
import { BookDetailComponent } from './book-management/book-detail/book-detail.component';
import { BookCardComponent } from './book-management/book-list/book-card/book-card.component';



@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookDetailComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BookManagementComponent,
    BookListComponent,
    BookDetailComponent,
    BookCardComponent
  ]
})
export class BookManagementModule { }
