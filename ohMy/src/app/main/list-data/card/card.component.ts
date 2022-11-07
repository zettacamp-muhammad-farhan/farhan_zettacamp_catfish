import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {User} from '../user';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user!:User
  date:any


  img = {
    female : "https://wallpapers.com/images/hd/cute-chibi-profile-picture-s52z1uggme5sj92d.jpg",
    male: "https://cdnb.artstation.com/p/assets/images/images/048/114/445/large/luupaloop-illustration-9.jpg?1649243050"
  }

  constructor(
    private translate:TranslateService
  ) { }


  ngOnInit() {
    // get data month bithday

    this.translate.onLangChange.subscribe(
      val => {
        let date:string = this.user.birth_day
        let birthDay = date.split(" ");
        console.log(birthDay[0]);
    
        // translate month
        let testMonth
        testMonth = this.translate.instant(birthDay[0]);
        birthDay[0] = testMonth;
        let birthDay1 = birthDay.join(" ")
        console.log(birthDay1);
        this.date = birthDay1;
        console.log(this.date);
        
      }
    )
    

    
    
  }

}
