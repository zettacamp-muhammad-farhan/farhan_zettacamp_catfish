import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:{}[]=[]

  constructor(private userData:UserDataService) { }

  ngOnInit() {  
    this.users=this.userData.person
    console.log(
      this.userData.getUser().subscribe(
        p=>{
          console.log(p)
        }
      )
    );
    
  }

}
