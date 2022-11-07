import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../data-user.service';
import {User} from './user';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  user:User[] = [{"first_name":"", "birth_day":"","last_name":"","civility":"","gender":""}]

  constructor(
    private dataUser:DataUserService,
    public dialog:MatDialog,
    public translate:TranslateService
    ) { }

  ngOnInit(){
    this.dataUser.getDataUser().subscribe(
      (user:User[])=>{
        console.log(user);
        
        this.user = user
      }
    )
  }

  openDialog(){
    const dialogRef = this.dialog.open(FormComponent, {
      width: "70%",
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        // console.log(res);
      }
    )
  }

  setLang(lang:string){
    this.translate.use(lang)
  }

}
