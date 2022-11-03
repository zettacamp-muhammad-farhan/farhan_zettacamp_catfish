import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content-actor',
  templateUrl: './content-actor.component.html',
  styleUrls: ['./content-actor.component.scss']
})
export class ContentActorComponent implements OnInit {
  actors:any

  constructor(
    private movie:MovieService
  ) { }

  ngOnInit() {
    this.movie.getActors().subscribe(
      a=>{
        this.actors = a
      }
    )
    
  }
  
}
