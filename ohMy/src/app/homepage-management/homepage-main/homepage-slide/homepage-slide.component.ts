import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from 'src/app/menu-management/menu-add/menu-add.component';
import Swal from 'sweetalert2';
import { HomepageService } from '../../homepage.service';

@Component({
  selector: 'app-homepage-slide',
  templateUrl: './homepage-slide.component.html',
  styleUrls: ['./homepage-slide.component.scss']
})
export class HomepageSlideComponent implements OnInit {

  @Input() recipes:any

  canBuy = false

  constructor(
    private dialog: MatDialog,
    private homeServ:HomepageService
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user') ? true : false
    this.canBuy = user
  }

  openDialog(id:any){
    if(this.canBuy){
      const dialogRef = this.dialog.open(MenuAddComponent, {
        width:"30%",
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
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must login before order!!',
        footer: '<a href="/login">Login</a>'
      })
    }

  }

}
