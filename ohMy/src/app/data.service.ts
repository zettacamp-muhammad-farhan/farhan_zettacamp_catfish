import { Injectable, OnInit } from '@angular/core';
import { HttpResponse, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http'
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  posts:{
    id:number,
    userId:number,
    body:string,
    title:string
  }[] = []
  posts$: BehaviorSubject<any> = new BehaviorSubject<any>([{}])

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

  }

  getData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (resp: any) => {
        this.posts = resp
        console.log(this.posts);
        this.posts$.next(this.posts)
        
        // resp.map((m: any) => {
        //   this.posts.push(m)
        // })
      }
    )
    console.log(this.posts.length);

   
    return (this.posts$.asObservable())
  }

  addData(val: any) {
    this.posts.push(val)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(val),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  deleteData(val:any) {

    let idInd = 0;
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == val){
        idInd = i
        break;
      }
    }

    this.posts.splice(idInd, 1)
    fetch('https://jsonplaceholder.typicode.com/posts/'+idInd, {
      method: 'DELETE',
    });
  }

  editData(id:any, content:any) {
    id = id-1
    let body = {
      title: "hola",
      id: 1, 
      userId:2,
      body:"hollly"
    }
    this.posts[id] = content
    fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

}
