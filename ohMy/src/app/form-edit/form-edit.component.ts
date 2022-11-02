import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
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
    let id = this.route.snapshot.queryParamMap.get('id')
    this.data.editData(id, this.signUpForm.value)
  }

}
