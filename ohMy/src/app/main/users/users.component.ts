import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any

  constructor(
    private userData:UserDataService
  ) { }

  ngOnInit() {
    this.users = this.userData.users
  }

}
