import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms'

let data: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  availableSources = [
    { display: 'pending', value: 'pending' },
    { display: 'active', value: 'active' },
  ]
  dataSource: any = new MatTableDataSource([])
  displayedColumns: string[] = [ 'status', 'name', 'type', 'email'];

  sourceFilter = new FormControl("")
  filterValues:any = {
    user_status : ""
  }

  selectedOption: any;
  constructor(
    private data: DataService
  ) { }

  onSelected(value: string) {
    this.selectedOption = value;
    console.log(this.selectedOption);

  }

  ngOnInit() {
    this.data.getData().subscribe(
      a => {
        this.dataSource.data = a
      }
    )

    this.fieldListener()


  }

  search(val: any) {
    this.dataSource.filterPredicate = function (data: any, filter: string) {
      console.log(data);
      const nameMatch = data.first_name.toLowerCase().includes(filter) || data.last_name.toLowerCase().includes(filter) || data.civility.toLowerCase().includes(filter)
      const userTypeMatch = true
      return nameMatch && userTypeMatch
      return data.first_name.toLowerCase().includes(filter) || data.last_name.toLowerCase().includes(filter) || data.civility.toLowerCase().includes(filter)
    };

    val = val.value
    // val = val.replace(/" "/g, "")
    val = val.trim().toLowerCase()
    this.dataSource.filter = val

  }
  searchType(val: any) {
    this.dataSource.filterPredicate = function (data: any, filter: string) {
      console.log(data);
      return data.company.user_type.toLowerCase().includes(filter);
    };

    val = val.value
    // val = val.replace(/" "/g, "")
    val = val.trim().toLowerCase()
    this.dataSource.filter = val

  }
  searchEmail(val: any) {
    this.dataSource.filterPredicate = function (data: any, filter: string) {
      console.log(data);
      return data.email.toLowerCase().includes(filter)
    };

    val = val.value
    // val = val.replace(/" "/g, "")
    val = val.trim().toLowerCase()
    this.dataSource.filter = val

  }




  private fieldListener() {
    
    this.sourceFilter.valueChanges
      .subscribe(
        user_status => {
          this.dataSource.filterPredicate = this.createFilter()
          console.log(user_status);

          this.filterValues.user_status = user_status;
          this.dataSource.filter = JSON.stringify(this.filterValues);
          console.log(this.dataSource);

        }
      )
  }

  private createFilter(): (data:any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);
      return data.user_status.indexOf(searchTerms.user_status) !== -1;
    }
    return filterFunction;
  }

}
