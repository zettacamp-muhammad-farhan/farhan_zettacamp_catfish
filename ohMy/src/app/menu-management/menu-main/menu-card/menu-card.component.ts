import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from '../../menu-add/menu-add.component';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() recipe:any

  constructor(
    private menuServ : MenuService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(id:any){
    // console.log(id);
    
    const dialogRef = this.dialog.open(MenuAddComponent, {
      width:"70%",
      data: {
        hola:"test",
        id:id
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        if(res){
          // this.getData()
        }
        
      }
    )
  }

}
