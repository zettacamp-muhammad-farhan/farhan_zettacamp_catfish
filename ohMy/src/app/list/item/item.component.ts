import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:any
  constructor(
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  deleteData(){
    this.data.deleteData(this.item.id)
  }
  editData(){
    this.router.navigate(['/list', 'edit'], {
      queryParams:{id:this.item.id}
    })
    // this.data.editData()
  }

}
