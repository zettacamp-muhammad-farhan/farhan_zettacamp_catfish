import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MenuManService } from '../menu-man.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.scss']
})
export class MenuUpdateComponent implements OnInit {

  formMenu:any
  ingredient:any
  ingredients:any

  constructor(
    private menuServ:MenuManService,
    public dialogRef:MatDialogRef<MenuUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.formMenu = new FormGroup({
      newName : new FormControl(this.data.name, Validators.required),
      price : new FormControl(this.data.price, Validators.required),
      image : new FormControl(this.data.image,),
      discount: new FormControl(this.data.dicount, Validators.required),
      newIngredient : new FormArray([])
    });

    let _id = {id:this.data.id}
    // console.log(_id);
    
    this.menuServ.getOneRecipes(_id).valueChanges.subscribe(
      (val:any)=>{
        const data = val.data.getOneRecipe.ingredients;
        this.ingredient = data;

      }
    )

    if(this.data.ingredient.length > 0){
      for(let i =0; i<this.data.ingredient.length; i++){
        const control = new FormGroup({
          ingredient_id : new FormControl(this.data.ingredient[i].ingredient_id._id, Validators.required),
          stock_used : new FormControl(this.data.ingredient[i].stock_used, Validators.required)
        });
    
        (<FormArray>this.formMenu.get('newIngredient')).push(control)
      }
    }


    this.menuServ.getIngridients().valueChanges.subscribe(
      (val:any)=>{
        // console.log(val);
        this.ingredients = val.data.getAllIngredients.data
      }
    )

  }

  addIngredient(){
    const control = new FormGroup({
      ingredient_id : new FormControl(null, Validators.required),
      stock_used : new FormControl(null, Validators.required)
    });

    (<FormArray>this.formMenu.get('newIngredient')).push(control)
  }

  removeIngredient(val:any){
    (<FormArray>this.formMenu.get('ingredients')).removeAt(val)
  }

  onSubmit(){
    
    this.formMenu.value.id = this.data.id
    this.formMenu.value.price = parseInt(this.formMenu.value.price)
    let stock = (this.formMenu.value.ingredient)
    // console.log(stock);
    
    // console.log(this.formMenu.value);
    this.formMenu.value.newIngredient.map((data:any) => {
      data.stock_used = parseInt(data.stock_used)
    })

    this.menuServ.updateRecipes(this.formMenu.value).subscribe(
      ({data})=>{
        // console.log(data);
        this.menuServ.getRecipes({page:0, limit:5}, "", null)
        this.dialogRef.close()
        Swal.fire({
          position:'center',
          icon: 'success',
          title : "Success update",
          confirmButtonText : 'okay'
        })
        
      }, error => {

        // console.log(error);
        
        Swal.fire({
          position:'center',
          icon: 'error',
          title : error,
          confirmButtonText : 'okay'
        })
      }
    )

 
  }


  close(){
    this.dialogRef.close(true)
  }
}
