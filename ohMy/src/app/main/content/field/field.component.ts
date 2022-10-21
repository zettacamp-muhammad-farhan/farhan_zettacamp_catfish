import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
   
  }
  
  @ViewChild('gambar') gambar:any
  ngAfterViewInit() {
    console.log(this.gambar)
  }

  

}
