import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StockService } from '../stock.service';

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
      this.stokServ.postIngirdient(this.formStock.value)
      this.dialogRef.close()
    }
  }

}
