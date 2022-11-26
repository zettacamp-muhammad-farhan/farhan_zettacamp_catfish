import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MenuManService } from '../menu-man.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {

  formMenu:any

  ingredients:any

  cpIngridients!:string[]

  selectedIngredient:string[] = []

  constructor(
    private menuServ:MenuManService,
    public dialogRef:MatDialogRef<MenuFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.formMenu = new FormGroup({
      recipe_name : new FormControl(null, Validators.required),
      price : new FormControl(null, Validators.required),
      image : new FormControl(null,),
      ingredients : new FormArray([])
    });

    this.addIngredient()

    this.menuServ.getIngridients().valueChanges.subscribe(
      (val:any)=>{
        // console.log(val);
        this.ingredients = val.data.getAllIngredients.data
      }
    )


    this.formMenu.get('ingredients').valueChanges.subscribe(
      (a:any)=>{
        this.selectedIngredient = a.map((val:any)=>{
          return val.ingredient_id
        })
        
      }
    )
  }

  addIngredient(){
    const control = new FormGroup({
      ingredient_id : new FormControl(null, Validators.required),
      stock_used : new FormControl(null, Validators.required)
    });

    (<FormArray>this.formMenu.get('ingredients')).push(control)
  }

  removeIngredient(val:any){
    (<FormArray>this.formMenu.get('ingredients')).removeAt(val)
  }

  onSubmit(){

    if(this.formMenu.valid){
      let stock = (this.formMenu.value.ingredients)
      this.formMenu.value.ingredients.map((data:any)=>{
        data.stock_used = parseInt(data.stock_used)
      })
      
      this.menuServ.postRecipes(this.formMenu.value).subscribe(
        ({data})=>{
  
          Swal.fire({
            position:'center',
            icon: 'success',
            title : 'Success add data',
            confirmButtonText : 'okay'
          })
          this.dialogRef.close(true)

          
        }, error => {
          Swal.fire({
            position:'center',
            icon: 'error',
            title : 'Menus already exist, check again',
            confirmButtonText : 'okay'
          })
        }
      )
    }else {
      Swal.fire({
        position:'center',
        icon: 'error',
        title : 'Fill form before submit !!!',
        confirmButtonText : 'okay'
      })
    }
  }



}
