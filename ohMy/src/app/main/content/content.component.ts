import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  styles:[`
  .magic{
    background-color: green;
    color: blue;
  }
  `
]
})
export class ContentComponent implements OnInit {

  user = 'admin'

  items = ['gajah', 'sapi', 'badak', 'jaran']

  list = [
    {
      title: "Elephant",
      img: "https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_16x9.jpg",
      desc: "kasdklasnd as dawjdkawjd ajdjnawkldnw awdnwkljdnw awljsdnklawnd wkdnwkld awldnw d"
    },
    {
      title: "Eagle",
      img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306062281/1800",
      desc: "kasdklasnd as dawjdkawjd ajdjnawkldnw awdnwkljdnw awljsdnklawnd wkdnwkld awldnw d"
    },
    {
      title: "Frog",
      img: "https://img.freepik.com/free-photo/dumpy-frog-litoria-caerulea-green-leaves-dumpy-frog-branch-amphibian-closeup_488145-3298.jpg?w=2000",
      desc: "kasdklasnd as dawjdkawjd ajdjnawkldnw awdnwkljdnw awljsdnklawnd wkdnwkld awldnw d"
    },
    {
      title: "Cow",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
      desc: "kasdklasnd as dawjdkawjd ajdjnawkldnw awdnwkljdnw awljsdnklawnd wkdnwkld awldnw d"
    },
    {
      title: "Ant",
      img: "https://i.cbc.ca/1.5326445.1571419149!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/galloping-ant.jpg",
      desc: "kasdklasnd as dawjdkawjd ajdjnawkldnw awdnwkljdnw awljsdnklawnd wkdnwkld awldnw d"
    },
    {
      title: "Horse",
      img: "https://equusmagazine.com/wp-content/uploads/sites/3/2021/11/horse-galloping-on-sand-scaled.jpg",
      desc: "iawjdiowdklqwmdkwlnd qwidnwiq winjfw wijfowfj wojfowfj wofjowjf wojfowafcmsa jolh"
    }
  ]

  constructor() { }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  switchRole(){
    if(this.user=="user"){
      this.user="admin"
    } else {
      this.user="user"
    }
  }

  ngOnInit(): void {
  }

}
