import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink/dist/subsink';
import { SchoolService } from '../school.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  displayedColumns = ['long_name', 'short_name', 'status'];

  private subs = new SubSink();

  schools:any = []
  dataSource = new MatTableDataSource();

  constructor(
    private schoolService:SchoolService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.schoolService
    .getSchools()
    .subscribe((data:any)=>{
      console.log(data);
      this.schools.push(data.data.GetAllSchools);
      this.dataSource = new MatTableDataSource(data.data.GetAllSchools);
    });
  }

}
