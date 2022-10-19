import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  nama:string =  "Muhammad Farhan"
  status:string = "online"

  creationStatus = "status not create"

  allowedClick = false

  statusName = "Server Name"

  constructor() {
    setTimeout(()=>{
      this.allowedClick = true
    },2000)
   }

  statuses(){
    return this.status
  }

  creationStatuses(){
    return this.creationStatus = "status has been created " + this.statusName
  }

  updateOnStatuses(event:any){
    // console.log(event)
    this.statusName = (<HTMLInputElement>event.target).value

  }

  ngOnInit(): void {
  }

}
