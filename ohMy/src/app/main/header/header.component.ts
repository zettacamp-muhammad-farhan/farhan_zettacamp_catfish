import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgWizz = "https://images.fineartamerica.com/images-medium-large-5/1-thinker-wizard-rob-carlos.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
