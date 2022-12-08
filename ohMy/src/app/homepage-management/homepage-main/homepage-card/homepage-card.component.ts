import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from 'src/app/menu-management/menu-add/menu-add.component';
import Swal from 'sweetalert2';
import { HomepageService } from '../../homepage.service';



@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {

  adm!:boolean
  loged!:boolean|null;
  user:any

  @Input() recipe:any

  canBuy = false

  constructor(
    private dialog: MatDialog,
    private homeServ:HomepageService
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user') ? true : false
    this.canBuy = user

    const usr:any = localStorage.getItem('user') ? localStorage.getItem('user') : false
    if(usr !== false) {
      const user = JSON.parse(usr)
      this.user = user
      // console.log(this.user);
      this.adm = user.user_type[4].view // if admin true
    }

    let data = localStorage.getItem('token') ? true : false
    this.loged = data;
  }

  openDialog(id:any){
    if(this.canBuy){
      const dialogRef = this.dialog.open(MenuAddComponent, {
        width:"400px",
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
