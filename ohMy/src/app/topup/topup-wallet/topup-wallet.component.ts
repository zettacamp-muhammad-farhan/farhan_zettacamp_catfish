import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TopupWalletService } from '../topup-wallet.service';


@Component({
  selector: 'app-topup-wallet',
  templateUrl: './topup-wallet.component.html',
  styleUrls: ['./topup-wallet.component.scss']
})
export class TopupWalletComponent implements OnInit {

  formMenu:any

  constructor(
    private topupServ:TopupWalletService,
    public dialogRef:MatDialogRef<TopupWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.formMenu = new FormGroup({
      balance: new FormControl(10000, Validators.required)
    })
  }

  onSubmit(){
    if(this.formMenu.valid){
      this.formMenu.value.balance = parseInt(this.formMenu.value.balance);
      const data = this.formMenu.value
      console.log(data);
      this.topupServ.topUp(data).subscribe(
        (data)=>{
          Swal.fire({
            position:'center',
            icon: 'success',
            title : 'Success Topup D-Wallet',
            confirmButtonText : 'okay'
          })
          this.dialogRef.close(true)
        }
      )

    }else {
      Swal.fire({
        position:'center',
        icon: 'error',
        title : 'Fill balance before submit !!!',
        confirmButtonText : 'okay'
      })
    }
  }

  close(){
    this.dialogRef.close(true)
  }


}
