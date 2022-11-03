import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss']
})
export class DetailActorComponent implements OnInit {

  actor:any

  constructor(
    private mov:MovieService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    let actor = this.mov.getAct(id);
    actor.subscribe(
      a=>{
        this.actor = a
      }
    )

  }

}
