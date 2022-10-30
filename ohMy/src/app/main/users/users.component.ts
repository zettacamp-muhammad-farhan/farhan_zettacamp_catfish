import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any

  constructor(
    private userData:UserDataService,
    public translate:TranslateService
    
  ) { }

  ngOnInit() {
    this.userData.getUsers().subscribe(
      p=>{
        // console.log(p)
        this.users = p
      }
    )
    // this.users = this.userData.users
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
