import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {



  foods = [
    {
      img: "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900",
      nama: "Fried Rice",
      price: 8000
    },
    {
      img: "https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg",
      nama: "Pudding", 
      price: 5000
    },
    {
      img: "https://cdn.britannica.com/98/234398-050-AE0523E8/spoon-held-over-bowl-of-cooked-oats-porridge.jpg",
      nama: "Pourridge",
      price: 7000
    },
    {
      img: "https://cdn0-production-images-kly.akamaized.net/2g955Bd5VrHq_UqJu765xp9NWzE=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4047355/original/051326100_1654749405-crispy-fried-chicken-wooden-cutting-board.jpg",
      nama: "Fried Chicken",
      price: 9000
    },
    {
      img: "https://img.taste.com.au/EX5BMmxA/w1200-h630-cfill/taste/2016/11/soy-and-linseed-loaf-45907-1.jpeg",
      nama: "Soy Bread",
      price: 7000
    },
    {
      img: "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/Bread_toast_recipe.jpg",
      nama: "Bread Toast",
      price: 5000
    },
    {
      img: "https://img.freepik.com/premium-photo/sup-buah-fresh-fruits-mixed-together-with-added-milk-ice-fresh-syrup_558534-340.jpg",
      nama: "Fruit Sup",
      price: 10000
    },
    {
      img: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg",
      nama: "Ice Cream",
      price : 7000
    },
    {
      img: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg",
      nama: "Ice Cream",
      price : 7000
    }
  ];

  foodUpdate = new EventEmitter<any>()

  _dataFood:BehaviorSubject<any> = new BehaviorSubject([]);
  dataFood = this._dataFood.asObservable();

  private _countData:BehaviorSubject<any> = new BehaviorSubject({
    totalCart:0
  })
  private countData = this._countData.asObservable();

  constructor() { }

  getCount(){
    return this.countData
  }
  setCount(val:any){
    return this._countData.next(val)
  }

  ngOnInit(){
    console.log(this.dataFood)
  }

  buy(val:string){
    this._dataFood.next(val)
  }

  cek(){
    console.log(this.dataFood.subscribe({
      next: (value) => {
        console.log(value)
      }
    }
    ))
  }

  addFood(img:string, nama:string, price:number){
    this.foods.push({img:img,nama : nama, price : price})
  }

  getDisc(id:any, price:number){
    this.foods[id].price = price - (price * 0.1)
  }
}
