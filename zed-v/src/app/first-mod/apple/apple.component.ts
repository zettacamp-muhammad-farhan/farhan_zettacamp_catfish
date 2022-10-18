import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  person:{
    nama:string
    age:number
  }[]=[
    {
      nama:"farhan",
      age:22
    },
    {
      nama:"Rick",
      age:20
    },
    {
      nama:"Ryena",
      age:25
    },
    {
      nama: "Vya",
      age: 24
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
