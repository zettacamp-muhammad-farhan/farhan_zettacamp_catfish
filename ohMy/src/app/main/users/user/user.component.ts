import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:any;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  editData(){
    this.router.navigate(['/users', 'edit', this.user.id]);
  }

}
