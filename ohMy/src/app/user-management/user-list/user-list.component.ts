import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink/dist/subsink';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  subs = new SubSink();
  users:{}[] = []

  searchName = new FormControl('');

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.searchName.valueChanges.subscribe((search: any) => {
      if (search.length > 3) {
        this.subs.sink = this.userService
          .getUsers(search)
          .subscribe((resp: any) => {
            this.users = resp.data.GetAllUsers;
          });
      } else {
        this.users = [];
      }
    });
  }

}
