import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  movies:{}[] = []

  constructor(
    private movie:MovieService
  ) { }

  ngOnInit() {
    let data = this.movie.getMovies().subscribe(
      a=>{
        this.movies = a
      } 
    )
    
  }



}
