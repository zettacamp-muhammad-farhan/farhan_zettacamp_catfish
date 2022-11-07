import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataUserService } from '../data-user.service';
import { Gender } from '../list-data/user';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  

  genders:Gender[] = [{value:"Male"}, {value:"Female"}]

  constructor(
    private dataUser:DataUserService,
    private datepipe:DatePipe,
    private route:ActivatedRoute,
    private router:Router,
    public dialogRef:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
  }

  formUser = new FormGroup({
    first_name : new FormControl(null, Validators.required),
    last_name : new FormControl(null, Validators.required),
    civility : new FormControl(null, Validators.required),
    birth_day : new FormControl(null, Validators.required),
    gender : new FormControl(null, Validators.required),
  })

  onSubmit(){
    if(this.formUser.valid){
      // change date format to string
      this.formUser.value.birth_day = this.datepipe.transform(this.formUser.value.birth_day);
      // console.log(this.formUser.value);
      this.dataUser.addDataUser(this.formUser.value);
      //show alert
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      
      })
      // this.router.navigate(["/"]);
      this.dialogRef.close()
      

    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You must fill the field',
        showConfirmButton: false,
        timer: 1500
      
      })
      console.log('fail');
      
    }

  }

}
