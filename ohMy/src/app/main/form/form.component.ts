import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userId = null

  signUpForm:any
  user:any= {}
  genders:string[] = ["Male", "Female"]

  constructor(
    private userData:UserDataService,
    private route:ActivatedRoute,
    private router:Router,
    public translate:TranslateService
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.userId = this.route.snapshot.params['id'];
    }else {
      this.userId = null
    }

    let user = this.userData.getUser(this.userId);
    
    this.user = user
    

    this.signUpForm = new FormGroup({
      id:new FormControl(null, [Validators.required]),
      name:new FormControl(null, Validators.required),
      age:new FormControl(null, Validators.required),
      gender:new FormControl(null, Validators.required),
      email:new FormControl(null, Validators.required),
      position:new FormControl(null, Validators.required),
      martial:new FormControl(null, Validators.required),
      addresses: new FormArray([])

    })
    console.log(this.userId);
    
    if(this.userId != null ){
      let lengthUser = user[0].addresses.length;
      console.log(1);
      
      if(lengthUser > 0){
        for(let i = 0; i < lengthUser; i++){
          const control = new FormGroup({
            address:new FormControl(null),
            zip:new FormControl(null),
            city:new FormControl(null),
            country:new FormControl(null)
          });
          (<FormArray>this.signUpForm.get('addresses')).push(control);
        }
      }
      
      
    }

    this.signUpForm.patchValue(this.user[0]);



  }


  onSubmit(){

    if(this.route.snapshot.params['id']){
      this.userData.editUser(this.userId, this.signUpForm.value)
    }else {
      // console.log(this.signUpForm.value)
      this.userData.addUser(this.signUpForm.value)
      alert('success add data ' + this.signUpForm.value.name)
    }

    this.router.navigate(['/users']);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  backTo(){
    this.router.navigate(['/users']);
  }

  addAddress(){
    const control = new FormGroup({
        address:new FormControl(null),
        zip:new FormControl(null),
        city:new FormControl(null),
        country:new FormControl(null)
    });
    (<FormArray>this.signUpForm.get('addresses')).push(control);
  }

  deleteAddress(val:number){
    (<FormArray>this.signUpForm.get('addresses')).removeAt(val)
  }

}
