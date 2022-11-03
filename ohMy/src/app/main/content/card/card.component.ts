import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie:any

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  getDetail(){
    this.router.navigate(['movies','detail', this.movie.id])
  }

}
