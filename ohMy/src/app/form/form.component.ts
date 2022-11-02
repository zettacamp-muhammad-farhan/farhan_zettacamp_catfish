import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  signUpForm:any

  constructor(
    private data:DataService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {

    this.signUpForm = new FormGroup({
      id:new FormControl(null,Validators.required),
      userId:new FormControl(null,Validators.required),
      title:new FormControl(null, Validators.required),
      body:new FormControl(null)
    })
  }

  onSubmit(){
    

    this.data.addData(this.signUpForm.value)
    console.log(this.signUpForm.value);


  }

}
