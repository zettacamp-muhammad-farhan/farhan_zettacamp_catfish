import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

  @Input() actor:any

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  getDetail(){
    this.router.navigate(['actor','detail', this.actor.id])
  }

}
