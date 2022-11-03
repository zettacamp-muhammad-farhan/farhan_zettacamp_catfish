import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie:any

  constructor(
    private movies:MovieService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    let movie = this.movies.getActor(id)
    movie.subscribe(
      (a:any)=>{
        this.movie = a
      }
    )
    
  }

}
