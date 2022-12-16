import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MenuAddComponent } from '../../menu-add/menu-add.component';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  adm!:boolean
  loged!:boolean|null;
  user:any

  @Input() recipe:any

  canBuy = false

  constructor(
    private menuServ : MenuService,
    private dialog: MatDialog
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
    // console.log(id);

    if(this.canBuy){
      const dialogRef = this.dialog.open(MenuAddComponent, {
        width:"400px",
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
