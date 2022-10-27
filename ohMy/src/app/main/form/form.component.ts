import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userId = null

  signUpForm:any
  user:any= {}

  constructor(
    private userData:UserDataService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.userId = this.route.snapshot.params['id']
      
    }else {
      this.userId = null
    }

    let user = this.userData.getUser(this.userId);
    this.user = user

    // console.log(this.user[0]);
    

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
    this.signUpForm.patchValue(this.user[0]);




  }

  onSubmit(){

    if(this.route.snapshot.params['id']){
      this.userData.editUser(this.userId, this.signUpForm.value)
    }else {
      console.log(this.signUpForm.value)
      this.userData.addUser(this.signUpForm.value)
      alert('success add data' + this.signUpForm.value.name)
    }

  }

}
