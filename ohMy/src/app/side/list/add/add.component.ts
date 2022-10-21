import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Output() newAnimal = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  addAnimal(val:any){
    this.newAnimal.emit(val)
  }

}
