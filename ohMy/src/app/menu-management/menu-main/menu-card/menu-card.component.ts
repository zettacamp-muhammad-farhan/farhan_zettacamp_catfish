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
  @Input() recipe:any

  canBuy = false

  constructor(
    private menuServ : MenuService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user') ? true : false
    this.canBuy = user
  }

  openDialog(id:any){
    // console.log(id);

    if(this.canBuy){
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
