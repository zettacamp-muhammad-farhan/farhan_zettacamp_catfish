import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StockService } from '../stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {

  constructor(
    private stokServ:StockService,
    private route:ActivatedRoute,
    private router:Router,
    public dialogRef:MatDialogRef<StockFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any

  ) { }

  ngOnInit(): void {
  }

  formStock = new FormGroup({
    name : new FormControl(null, Validators.required),
    stock : new FormControl(null, Validators.required)
  })

  onSubmit(){
    if(this.formStock.valid){
      this.stokServ.postIngirdient(this.formStock.value).subscribe(
        ({data})=>{
          console.log(data);
  
          Swal.fire({
            position:'center',
            icon: 'success',
            title : 'Success add data',
            confirmButtonText : 'okay'
          })
          this.stokServ.getIngridients({page:0, limit:10}, "")
          this.dialogRef.close('hola')
          
        }, error => {
          Swal.fire({
            position:'center',
            icon: 'error',
            title : 'stock already exist, please check again ...',
            confirmButtonText : 'okay'
          })
  
          
        }
      )
    }
  }

}
