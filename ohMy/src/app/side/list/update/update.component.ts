import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterContentInit, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() editAnimal:any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('animal') animal=""

  updateAnimal(val:any){
    this.editAnimal.emit(val.value)
  }

}
