import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user!:User

  constructor() { }

  ngOnInit(): void {
  }

}
