import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  private _books:BehaviorSubject<any>


  books:{}[] = [
    {
      img:"https://dictionaryblog.cambridge.org/wp-content/uploads/2017/11/magic-wand.jpg",
      name: "Magic Hour",
      author: "Angela",
      publisher: "Three Kingdom",
      publishDate: "2022"
    },
    {
      img:"https://i0.wp.com/interestingliterature.com/wp-content/uploads/2021/09/Belshazzars-Feast.jpg?ssl=1",
      name: "Height Wall",
      author: "Rosella",
      publisher: "The Council",
      publishDate: "2021"
    },
    {
      img:"https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg",
      name: "Summer at Night",
      author: "Virtuvy",
      publisher: "Marmonia",
      publishDate: "2018"
    },
    {
      img:"https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-09/shutterstock_625010075a.jpg?itok=d9UYgeVj",
      name: "The Big Dream",
      author: "Michelle",
      publisher: "Big Wall",
      publishDate: "2019"
    },
    {
      img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B796/production/_103889964_1a.jpg",
      name: "Dare or Lose",
      author: "Kimura",
      publisher: "Big",
      publishDate: "2020"
    },
    {
      img:"https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg",
      name: "River of Time",
      author: "Rachel",
      publisher: "Trinity",
      publishDate: "2022"
    },

  ]


  constructor() { 
    this._books = new BehaviorSubject<any>(this.books)
  }
  
  private _selectedBook = new BehaviorSubject<any>(this.books[0])

  getBooks(): Observable<any> {
    return this._books.asObservable();
  }

  addBook(item:object){
    this.books.push(item)
    this._books.next(this.books);
  }

  selectedBook(val:{}){
    this._selectedBook.next(val)
  }

  getSelectedBook(){
    return this._selectedBook.asObservable();
  }
}
