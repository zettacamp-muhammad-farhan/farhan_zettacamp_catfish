import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { DetailComponent } from './detail/detail.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActorCardComponent } from './content-actor/actor-card/actor-card.component';
import { ContentActorComponent } from './content-actor/content-actor.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailActorComponent } from './detail-actor/detail-actor.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ContentComponent,
    CardComponent,
    DetailComponent,
    ActorCardComponent,
    ContentActorComponent,
    DetailActorComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule, 
    MatTabsModule
  ],
  exports:[
    SidenavComponent,
    ContentComponent,
    CardComponent,
    DetailComponent,
    ActorCardComponent,
    ContentActorComponent,
    DetailActorComponent,
    AboutComponent
  ]
})
export class MainModule { }
