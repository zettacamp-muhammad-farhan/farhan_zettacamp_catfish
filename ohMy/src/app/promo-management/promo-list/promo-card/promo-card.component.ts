import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

  @Input() promo:any

  imgDef:string = "https://media.istockphoto.com/id/1303237166/photo/energy-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=pzWjHGsouX4IuFK6MBFu-ko8Fs2Z-rC1DtTCHwdlY3U="

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }


}
