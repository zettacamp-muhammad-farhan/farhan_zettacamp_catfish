import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:any = []

  constructor(
    private userData:UserDataService,
    private router:Router
  ) { }

  ngOnInit() {
    // console.log(this.user.id);
    
  }

  viewDetail(){
    this.router.navigate(['/user', this.user.id]);
  }

}
