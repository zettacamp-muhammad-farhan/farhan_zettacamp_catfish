import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohMy';
  loadingImg = "https://i.stack.imgur.com/hzk6C.gif"
  load = true

  constructor(){

  }

  ngAfterViewInit() {
    setInterval(()=>{this.load=false}, 2000)
  }
}
