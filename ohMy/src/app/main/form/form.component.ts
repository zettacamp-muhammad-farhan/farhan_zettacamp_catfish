import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  signUpForm:any

  constructor(
    private userData:UserDataService
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      id:new FormControl(null, Validators.required),
      name:new FormControl(null, Validators.required),
      age:new FormControl(null, Validators.required),
      gender:new FormControl(null, Validators.required),
      email:new FormControl(null, Validators.required),
      position:new FormControl(null, Validators.required),
      martial:new FormControl(null, Validators.required),
      addresses:new FormGroup({
        address:new FormControl(null, Validators.required),
        zip:new FormControl(null, Validators.required),
        city:new FormControl(null, Validators.required),
        country:new FormControl(null, Validators.required)
      })

    })
  }

  onSubmit(){
    console.log(this.signUpForm.value)
    this.userData.addUser(this.signUpForm.value)
    alert('success add data' + this.signUpForm.value.name)
    this.signUpForm.value = null
  }

}
