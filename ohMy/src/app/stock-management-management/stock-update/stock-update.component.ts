import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StockService } from '../stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit {

  constructor(
    private stokServ:StockService,
    private route:ActivatedRoute,
    private router:Router,
    public dialogRef:MatDialogRef<StockUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  updateStock = new FormGroup({
    name : new FormControl(this.data.name, [Validators.required]),
    stock : new FormControl(this.data.stock, [Validators.required, Validators.min(0)])
  })

  onSubmit(){
    console.log(this.data);

    
    if(this.updateStock.valid){
      let {name, stock}:any = this.updateStock.value
      let newStock = parseInt(stock)

      const id = this.data.id
      const data = {newStock, id}
      this.stokServ.updateIngirdient(data).subscribe(
        ({data})=>{
          console.log(data);
          this.stokServ.getIngridients({limit:10, page:0}, "")
          this.dialogRef.close('test')

          Swal.fire({
            position:'center',
            icon: 'success',
            title : "Success update",
            confirmButtonText : 'okay'
          })
          
        }, error => {
  
          console.log(error);
          
          Swal.fire({
            position:'center',
            icon: 'error',
            title : error,
            confirmButtonText : 'okay'
          })
        }
      )

    } else {
      Swal.fire({
        position:'center',
        icon: 'error',
        title : "Value can't under 0 ",
        confirmButtonText : 'okay'
      })
    }
  }

}
