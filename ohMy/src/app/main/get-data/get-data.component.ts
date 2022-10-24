import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  subscription: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  callFood(){
    let a 
    this.dataService.dataFood.subscribe(
      (value)=>{
        a = value
      }
    )
    return a 
  }

}
