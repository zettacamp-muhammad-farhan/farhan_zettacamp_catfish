import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolServiceService } from 'src/app/service/school-service.service';
import {SubSink} from 'subsink'

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.scss']
})
export class ListSchoolComponent implements OnInit {
  private subs = new SubSink();

  constructor(
    private scholService:SchoolServiceService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.scholService
    .getSchool()
    .subscribe((resp:any) => {
      console.log(resp);
      
    })
  }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  // }

}
