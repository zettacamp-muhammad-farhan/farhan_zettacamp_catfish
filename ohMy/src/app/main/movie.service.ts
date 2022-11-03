import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private actors$ :BehaviorSubject<any>
  private actor$ !:BehaviorSubject<any>
  private movies$ :BehaviorSubject<any>
  private movie$!:BehaviorSubject<any>

  actor = [
    {
      id: 1,
      name:"Johny Deep",
      born: "June 9, 1963",
      live: "Los Angels, California",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Johnny_Depp-2757.jpg/800px-Johnny_Depp-2757.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 2,
      name:"Keira Knightley",
      born: "March, 26 1985",
      live: "Britania",
      img:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDAyMDM3MDU0MjUyNzQw/keira-knightley_gettyimages-462189176jpg.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 3,
      name:"Orlando Bloom",
      born: "January, 13 1977",
      live: "Orlando",
      img:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTI0NDI0NDA3NDkxNjcy/gettyimages-1188892214.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 4,
      name:"Tom Holland",
      born: "June, 01 1996",
      live: "Kingston Upon Thames",
      img:"https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 5,
      name:"Zendaya",
      born: "September, 01 1996",
      live: "Oakland, California",
      img:"https://media.vogue.co.uk/photos/63399669653aac3e89335d08/2:3/w_2560%2Cc_limit/shutterstock_editorial_13435545o.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 6,
      name:"Jake Gyllenhaal",
      born: "December, 19 1980",
      live: "Los Angels, California",
      img:"https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzk1MjAyMDYy/jake-gyllenhaal-16242387-1-402.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 7,
      name:"Benedict Cumberbatch",
      born: "July, 19 1976",
      live: "London",
      img:"https://images.mubicdn.net/images/cast_member/16571/cache-6265-1652192531/image-w856.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 8,
      name:"Elizabeth Olsen",
      born: "February, 16 1989",
      live: "Los Angels, California",
      img:"https://i.pinimg.com/736x/25/1b/2c/251b2c0f3e981d06247be49fa9a3fe27.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 9,
      name:"Xochitl Gomez",
      born: "April, 29 2006",
      live: "Los Angels, California",
      img:"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/0180ab98ec3199c9ecc42fd5d0f79cf1.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 10,
      name:"Robert Downey Jr.",
      born: "April 4, 1965",
      live: "New York, United States",
      img:"https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 11,
      name:"Chris Evans",
      born: "June 13, 1981",
      live: "Massachusetts, United States",
      img:"https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY1200_CR112,0,630,1200_AL_.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 12,
      name:"Scarlett Johansson",
      born: "November 22, 1984",
      live: "New York, United States",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Scarlett_Johansson_in_Kuwait_01b.jpg/1200px-Scarlett_Johansson_in_Kuwait_01b.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 13,
      name:"Chris Hemsworth",
      born: "August 11, 1983",
      live: "Melbourne, Australia",
      img:"https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 14,
      name:"Natalie Portman",
      born: "June 9, 1981",
      live: "Jerusalem",
      img:"https://cdn.jwa.org/sites/default/files/styles/scale_width_300px/public/mediaobjects/Natalie_Portman_at_the_TIFF_2009-01-3.jpg?itok=NVcJtuS_",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 15,
      name:"Taika Waititi",
      born: "August 16, 1975",
      live: "Raukokore, Waihau Bay, New Zealand",
      img:"https://cdn.britannica.com/23/222823-050-65632515/New-Zealand-film-director-Taika-Waititi-2020.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 16,
      name:"Margot Robbie",
      born: "July 2, 1990",
      live: "Dalby, Australia",
      img:"https://cdn.britannica.com/32/201632-050-66971649/actress-Margot-Robbie-Australian-2018.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 17,
      name:"Pete Davidson",
      born: "November 16, 1993",
      live: "Staten Island, New York, United States",
      img:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Pete_Davidson_in_2015_%2817073107891%29.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
    {
      id: 18,
      name:"John Cena",
      born: "April 23, 1977",
      live: "Staten Island, New York, United States",
      img:"https://blue.kumparan.com/image/upload/c_fill,f_jpg,h_1200,q_auto,w_1200/g_south,l_og_kumparan_zscykb/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20Redaksi%20kumparan%0DkumparanSPORT,x_140,y_26/itwme1tu5f93gmmybqbj.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde."
    },
  ]

  movies = [
    {
      id:"1",
      title:"The Pirates Of Caribean", 
      produced: "Jerry Bruckheimer",
      company:"Walt Disney Pictures",
      img:"https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_.jpg", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[1], this.actor[2], this.actor[3]]
    },
    {
      id:"2",
      title:"Spider-Man: Far from Home", 
      produced: "Jon Watts",
      company:"Marvel",
      img:"https://fr.web.img5.acsta.net/pictures/19/06/13/15/28/4575985.jpg", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[4], this.actor[5], this.actor[6]]
    },
    {
      id:"3",
      title:"Dr Strange 2", 
      produced: "Sam Raimi",
      company:"Marvel",
      img:"https://assets-a1.kompasiana.com/items/album/2022/05/12/dsitmom-poster-ph-sg-id-f0f15716-627c848e8d947a1690147fe3.jpeg", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[7], this.actor[8], this.actor[9]]
    },
    {
      id:"4",
      title:"Avengers: Endgame", 
      produced: "Anthony Russo",
      company:"Marvel",
      img:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[10], this.actor[11], this.actor[12]]
    },
    {
      id:"5",
      title:"Thor: Love and Thunder", 
      produced: "Taika Waititi",
      company:"Marvel",
      img:"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[13], this.actor[14], this.actor[15]]
    },
    {
      id:"6",
      title:"Suicide Squad: Worst Heroes Ever", 
      produced: "James Gunn",
      company:"Peter Safran",
      img:"https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime explicabo voluptatem? Nostrum nihil maiores impedit esse voluptas aliquam. Pariatur itaque tempore ipsum repudiandae dolorum praesentium, nobis officiis inventore unde.", 
      actor:[this.actor[16], this.actor[17], this.actor[18]]
    },
  ]


  constructor() {
    this.actors$ = new BehaviorSubject<any>(this.actor)
    this.movies$ = new BehaviorSubject<any>(this.movies)
  }
  
  getMovies(){
    return this.movies$.asObservable()
  }
  getActors(){
    return this.actors$.asObservable()
  }
  getActor(id:any){
    for(let i = 0; i < this.movies.length; i++){
      if(this.movies[i].id == id){
        console.log(this.movies[i]);
        this.movie$ = new BehaviorSubject<any>(this.movies[i])
        break
      }
    }
    return this.movie$.asObservable()
  }
  getAct(id:any){
    for(let i = 0;i<this.actor.length;i++){
      if(this.actor[i].id == id){
        console.log(this.actor[i]);
        this.actor$ = new BehaviorSubject<any>(this.actor[i])
        break
      }
    }
    return this.actor$.asObservable()
  }
}
