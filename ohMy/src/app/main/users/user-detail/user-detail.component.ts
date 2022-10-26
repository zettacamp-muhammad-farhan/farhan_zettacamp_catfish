import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId:any;
  user:any

  constructor(
    private route:ActivatedRoute,
    private userData:UserDataService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id']
    // console.log(this.userId)
    this.userData.addDetail(this.userId)
    this.userData.getDetail().subscribe(
      p=>{
        // console.log(p)
        this.user = p
      }
    )

    // this.userData.getUser().subscribe(
    //     par=>{
    //       console.log(par);
          
    //     }
    // )
    console.log(this.user)
  }



}
