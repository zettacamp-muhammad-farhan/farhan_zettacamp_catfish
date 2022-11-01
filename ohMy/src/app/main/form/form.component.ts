import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import {TranslateService} from '@ngx-translate/core';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  forbiddenUsername = ['hanz', 'danz', 'franz'];

  registeredId:any = ['test']

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

  ngOnChanges(changes: SimpleChanges) {
    //
  }

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
      name:new FormControl(null, [Validators.required, this.forbidName.bind(this)]),
      age:new FormControl(null, [Validators.required, Validators.min(10)]),
      gender:new FormControl(null),
      email:new FormControl(null, [Validators.required, Validators.email]),
      position:new FormControl(null),
      martial:new FormControl(null),
      addresses: new FormArray([])
    })
    
    if(this.userId != null ){
      // this.signUpForm.get('id')?.disable()
      let lengthUser = user[0].addresses.length;
      if(lengthUser > 0){
        for(let i = 0; i < lengthUser; i++){
          const control = new FormGroup({
            address:new FormControl(null),
            zip:new FormControl(null, [Validators.required, Validators.minLength(3)]),
            city:new FormControl(null),
            country:new FormControl(null)
          });
          (<FormArray>this.signUpForm.get('addresses')).push(control);
        }
      }
      
      
    }

    this.signUpForm.patchValue(this.user[0]);

    this.registeredId = this.userData.registeredId
    // console.log(this.registeredId);

    if(this.route.snapshot.params['id']){
      let nama = ""
      this.signUpForm.get('name').valueChanges.subscribe((changes: any)  => {
        console.log(changes)
        let specialChar = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let a = specialChar.test(changes)
        if(a) {
          this.signUpForm.patchValue(
            {name: nama},
            {emitEvent:false}
          )
          Swal.fire("username can't contain special character", "", 'warning')
        }else {
          nama = changes
        }
        
      })
    }else {
      this.signUpForm.get('name').valueChanges.subscribe((changes: any)  => {
        // console.log('form value changed')
        // console.log(changes)
        let specialChar = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let a = specialChar.test(changes)
        if(a) {
          this.signUpForm.get('name').setValue("", {emitEvent:false})
          Swal.fire("username can't contain special character", "", 'warning')
        }
        
      })
    }


    


  }


  onSubmit(){
    if(this.route.snapshot.params['id']){
      
      if(this.signUpForm.valid){
        console.log('berhasil');
        this.userData.editUser(this.userId, this.signUpForm.value)

        Swal.fire(
          'success to edit ' + this.signUpForm.value.name,
          'Click to close',
          'success'
        )
        this.router.navigate(['/users']);

      }else {
        console.log('gagal');
        Swal.fire(
          'Failed to edit ' + this.signUpForm.value.name,
          'Click to close',
          'error'
        )
      }
    }else {
      if(this.signUpForm.valid){
        console.log('berhasil');
        this.userData.addUser(this.signUpForm.value)
        Swal.fire(
            'success to add ' + this.signUpForm.value.name,
            'Click to close',
            'success'
        )
        this.router.navigate(['/users']);

      }else {
        console.log('gagal');
        Swal.fire(
          'Failed to add data',
          'Click to close',
          'error'
        )
      }

    }

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

  //delete multiple address
  deleteAddress(val:number){
    (<FormArray>this.signUpForm.get('addresses')).removeAt(val)
  }

  forbidName(control:FormControl){
    if(this.forbiddenUsername.indexOf(control.value) !== -1 ){
      return {'nameIsForbidden': true};
    }
    return null
  }

  forbidId(control:FormControl){
    if(this.registeredId.indexOf(control.value) !== -1){
      return {'idForbid' : true}
    } 
    return null
  }



}
