import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user!:User

  img = {
    male : "https://wallpapers.com/images/hd/cute-chibi-profile-picture-s52z1uggme5sj92d.jpg",
    female: "https://cdnb.artstation.com/p/assets/images/images/048/114/445/large/luupaloop-illustration-9.jpg?1649243050"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
