import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {



  items = [
    {
      img : "https://assetstorev1-prd-cdn.unity3d.com/key-image/c767d5d7-1a67-400a-9126-dfdaa8fb71f1.png",
      title: "Wizard Hat",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "300000"
    },
    {
      img : "https://cdn.dribbble.com/users/1563329/screenshots/9263933/media/e54680477aa18483eb5dbc12c47f7155.jpg?compress=1&resize=400x300",
      title: "Wizard Stick",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "370000"
    },
    {
      img : "https://cdn.shopify.com/s/files/1/0012/8876/5486/products/il_fullxfull.3488404552_40q6_1024x1024.jpg?v=1654801183",
      title: "Wizard Broom",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "500000"
    },
    {
      img : "https://i.pinimg.com/originals/bc/d9/3b/bcd93b608c1881fac9f1087a7e58f61c.jpg",
      title: "Healing Potion",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "70000"
    },
    {
      img : "http://cdn.ecommercedns.uk/files/2/231052/0/17307080/schnapps-set.jpg",
      title: "Poison Potion",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "75000"
    },
    {
      img : "https://losojosdeltecolote.com/wp-content/uploads/2021/03/darkhold.jpg",
      title: "Dark Hold",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "1500000"
    },
    {
      img : "https://i.pinimg.com/736x/6b/11/f5/6b11f5f33ab4d7c83d9474ca573c430a.jpg",
      title: "Recipe Of Potion",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "600000"
    },
    {
      img : "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/Lord-of-the-Rings-Amazon-Prime.jpg",
      title: "The One Ring",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "1000000"
    },
    {
      img : "https://lzd-img-global.slatic.net/g/p/17b561d0d49541240569454a042e1fbf.jpg_720x720q80.jpg_.webp",
      title: "Mytical Pan",
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at hic, quasi nam sapiente harum, quas porro dolorum voluptatum molestiae ratione repellat nostrum voluptatibus non enim, corrupti et nemo modi",
      price: "10000000"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {
    this.items.push(newItem);
  }

}
