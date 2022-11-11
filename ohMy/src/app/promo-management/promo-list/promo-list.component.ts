import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { PromoService } from '../promo.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PromoFormComponent } from './promo-form/promo-form.component';

import { MatPaginator, PageEvent } from '@angular/material/paginator';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit, OnDestroy {

  @ViewChild('paginator') paginator!: MatPaginator;
  length = 5
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pagination:any = {
    page: 0,
    limit: 5
  }

  subs = new SubSink();

  promos:{}[] = []

  constructor(
    private promoService:PromoService,
    public dialog:MatDialog,
    public translate:TranslateService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.promoService
    .getPromos(this.pagination)
    .valueChanges.subscribe(
      (data:any)=>{
        this.promos = data.data.GetAllPromos;
      }
    )
    this.initPaginator()
  }

  initPaginator() {
    this.promoService
          .getPromosLength()
          .subscribe((length: number) => {
                // update paginator length
                this.paginator.length = length;
                this.paginator.pageSize = this.pageSizeOptions[0]; // 5
          });
  }

  openDialog(){
    const dialogRef = this.dialog.open(PromoFormComponent, {
      width:'50%',
      data: {
        test:'test'
      }
    })

    this.refetchData();
  }

  onPaginatorChange(event: PageEvent) {
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;

    // refetch data
    this.refetchData();
  } 

  refetchData() {
      const pagination = this.pagination;
      this.promoService.getPromos(pagination).refetch();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.subs.sink?.unsubscribe()
  }

}
