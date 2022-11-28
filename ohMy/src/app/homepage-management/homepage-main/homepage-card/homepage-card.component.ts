import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from 'src/app/menu-management/menu-add/menu-add.component';
import { HomepageService } from '../../homepage.service';



@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {

  @Input() recipe:any

  constructor(
    private dialog: MatDialog,
    private homeServ:HomepageService
  ) { }

  ngOnInit(): void {
    // console.log(this.recipe);
    
  }

  openDialog(id:any){
    const dialogRef = this.dialog.open(MenuAddComponent, {
      width:"70%",
      data:{
        id:id
      }
    })
    dialogRef.afterClosed().subscribe(
      res=>{
        this.homeServ.getRecipesHighlight({limit:5, page:0}).refetch()
        this.homeServ.getRecipesSpecial({limit:5, page:0}).refetch()
      }
    )
  }


}
